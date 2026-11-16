// EDIT ME: what you gave, any order (the page sorts newest first, and draws the charts and recipient cards).
// date = "YYYY-MM"   what = who or what it went to   amount = number in US dollars   cause = group, e.g. "Education" (its colour follows the order of first gift)
// where each recipient is (the key must match "what" exactly)
window.GOOD_PLACES = {
  "University of Washington": "Seattle, WA",
  "University of California": "Davis, CA",
  "Takaya Support": "El Obeid, North Kordofan, Sudan",
  "Tri Valley Haven": "Livermore, CA",
};
window.GOODS = [
  { date: "2020-11", what: "University of Washington", cause: "Education", amount: 1850 },
  { date: "2021-12", what: "University of Washington", cause: "Education", amount: 3605 },
  { date: "2022-12", what: "University of Washington", cause: "Education", amount: 5000 },
  { date: "2023-12", what: "University of Washington", cause: "Education", amount: 26500 },
  { date: "2024-11", what: "University of Washington", cause: "Education", amount: 27800 },
  { date: "2025-04", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2025-09", what: "Tri Valley Haven", cause: "Domestic violence", amount: 310 },
  { date: "2025-09", what: "Takaya Support", cause: "Hunger", amount: 200000 },
  { date: "2025-11", what: "University of California", cause: "Education", amount: 20000 },
  { date: "2025-11", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2025-12", what: "University of Washington", cause: "Education", amount: 24000 },
  { date: "2026-04", what: "Takaya Support", cause: "Hunger", amount: 300000 },
  { date: "2026-04", what: "Tri Valley Haven", cause: "Homelessness", amount: 2418 },
  { date: "2026-10", what: "Tri Valley Haven", cause: "Domestic violence", amount: 3000 },
  { date: "2026-10", what: "Takaya Support", cause: "Hunger", amount: 155000 },
  { date: "2026-10", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2026-11", what: "University of California", cause: "Education", amount: 20000 },
  { date: "2026-11", what: "Tri Valley Haven", cause: "Homelessness", amount: 1818 },
  { date: "2026-11", what: "University of Washington", cause: "Education", amount: 20000 },
];

// The AI assessment shown at the top of Goods. It is plain text written from the gifts above (edit freely);
// "gifts" is how many gifts existed when it was written, so the page can say when newer gifts are not covered yet.
window.GOOD_VERDICT = {
  gifts: 19, asOf: "2026-11", by: "Claude",
  headline: "From steady education giving to large, concentrated humanitarian relief.",
  points: [
    ["The trend is steep.", "Giving went from $1,850 in 2020 to $27,800 in 2024, then $344,310 in 2025 and $552,236 so far in 2026. Those last two years hold 93% of the $961,301 given since 2020."],
    ["Education is the constant.", "There has been an education gift every year since 2020, now about $40,000 a year across the University of Washington and the University of California. Its share of each year's giving fell from 100% to 7% as relief giving grew."],
    ["The focus is Hunger and Disaster relief.", "They make up 84% of all dollars, and every dollar of it goes to one recipient, Takaya Support in Sudan (6 gifts). That is conviction and repeat giving rather than scattering, but it also means everything rides on one channel, so it is worth checking its reported outcomes now and then."],
    ["The small gifts stay close to home.", "Tri Valley Haven has received 4 gifts totalling $7,546 (under 1% of dollars), moving from domestic violence ($310, then $3,000) to homelessness. Small in dollars, but it is the one local, recurring thread."],
  ],
};
