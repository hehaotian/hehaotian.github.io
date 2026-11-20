// EDIT ME: the authors row above the Reads wall: one card per author, sliding slowly like the flags in Travels (hover pauses it); click a card to show only that author's books.
// Cards run from the most books to the fewest; FAVORITE_AUTHORS win a tie, in this order. name: what the card says. match: any part of book.author in data/reads.js that identifies the author.
// Every other author is added automatically. Books count whether or not they have a review.
window.FAVORITE_AUTHORS = [
  { name: "Marguerite Duras", match: ["Marguerite Duras", "杜拉斯"] },
  { name: "John Steinbeck", match: ["Steinbeck"] },
  { name: "Orhan Pamuk", match: ["Orhan Pamuk"] },
  { name: "Søren Kierkegaard", match: ["Kierkegaard"] },
  { name: "Fyodor Dostoevsky", match: ["Dostoevsky"] },
  { name: "Elena Ferrante", match: ["Elena Ferrante"] },
  { name: "Anne Carson", match: ["Anne Carson"] },
  { name: "莫言", match: ["莫言"] }
];
// the same person written in two ways in the data: the first spelling is shown as the other one
window.AUTHOR_ALIASES = {
  "余華": "Yu Hua", "路遙": "路遥", "錢鍾書": "钱锺书", "列夫·托尔斯泰": "Leo Tolstoy", "列夫·托爾斯泰": "Leo Tolstoy", "托尔斯泰": "Leo Tolstoy",
  "余华": "Yu Hua", "Fei Xiaotong": "费孝通", "费正清": "John King Fairbank"
};
