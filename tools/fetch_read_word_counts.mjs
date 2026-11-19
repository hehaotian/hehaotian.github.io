#!/usr/bin/env node

import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.runInNewContext(fs.readFileSync("data/reads.js", "utf8"), context);

const books = context.window.READS.map(read => read.book).filter(Boolean);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fold = value => String(value || "")
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim()
  .toLowerCase();
const latinTitle = value => {
  const parenthetical = [...String(value).matchAll(/\(([^)]+)\)/g)].at(-1)?.[1];
  if (parenthetical) return parenthetical;
  return String(value).replace(/[^\p{Script=Latin}\p{N}\p{P}\p{Zs}]/gu, " ").replace(/\s+/g, " ").trim();
};
const latinAuthor = value => String(value)
  .replace(/[^\p{Script=Latin}\p{N}\p{P}\p{Zs}]/gu, " ")
  .replace(/\s+/g, " ")
  .trim();
const overlap = (a, b) => {
  const aa = new Set(fold(a).split(" ").filter(x => x.length > 1));
  const bb = new Set(fold(b).split(" ").filter(x => x.length > 1));
  return aa.size ? [...aa].filter(x => bb.has(x)).length / aa.size : 0;
};

const retry = process.argv.includes("--retry") && fs.existsSync("/tmp/read-word-counts.json");
const output = retry ? JSON.parse(fs.readFileSync("/tmp/read-word-counts.json", "utf8")) : {};
const queue = retry ? books.filter(book => output[book.cover]?.status !== "matched") : books;
for (let index = 0; index < queue.length; index += 1) {
  const book = queue[index];
  const title = latinTitle(book.title);
  const author = latinAuthor(book.author);
  const query = encodeURIComponent(`${title} ${author}`);
  const searchQuery = retry ? encodeURIComponent(title) : query;
  const search = await fetch(`https://readingrate.com/api/v1/search?q=${searchQuery}&limit=12`).then(r => r.json());
  const candidates = (search.results || []).map(result => ({
    ...result,
    rank: overlap(title, result.title) * 3 + Math.max(...(result.authors || []).map(a => overlap(author, a)), 0),
  })).sort((a, b) => b.rank - a.rank);
  const match = candidates.find(result => result.rank >= (retry ? 2.1 : 2.25));

  if (!match) {
    output[book.cover] = { title: book.title, author: book.author, status: "unmatched", query: `https://readingrate.com/search?q=${query}` };
  } else {
    const detail = await fetch(`https://readingrate.com/api/v1/books/${match.slug}`).then(r => r.json());
    output[book.cover] = {
      title: book.title,
      author: book.author,
      words: detail.word_count || null,
      source: detail.url,
      matchedTitle: detail.title,
      matchedAuthors: (detail.authors || []).map(a => a.name),
      status: detail.word_count ? "matched" : "no-count",
      score: Number(match.rank.toFixed(2)),
    };
  }
  process.stderr.write(`${index + 1}/${queue.length} ${book.cover}: ${output[book.cover].status}\n`);
  await sleep(550);
}

fs.writeFileSync("/tmp/read-word-counts.json", JSON.stringify(output, null, 2) + "\n");
