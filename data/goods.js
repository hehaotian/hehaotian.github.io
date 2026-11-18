// EDIT ME: what you gave, any order (the page sorts newest first, and draws the charts and recipient cards).
// date = "YYYY-MM"   what = who or what it went to   amount = number in US dollars   cause = group, e.g. "Education" (its colour follows the order of first gift)
// Amounts are rounded on purpose, to the nearest $1,000 (to the nearest $100 under $1,000), so the exact figures are not public.
// where each recipient is (the key must match "what" exactly)
window.GOOD_PLACES = {
  "University of Washington": "Seattle, WA",
  "University of California": "Davis, CA",
  "Takaya Support": "El Obeid, North Kordofan, Sudan",
  "Tri Valley Haven": "Livermore, CA",
};
window.GOODS = [
  { date: "2020-11", what: "University of Washington", cause: "Education", amount: 2000 },
  { date: "2021-12", what: "University of Washington", cause: "Education", amount: 4000 },
  { date: "2022-12", what: "University of Washington", cause: "Education", amount: 5000 },
  { date: "2023-12", what: "University of Washington", cause: "Education", amount: 27000 },
  { date: "2024-11", what: "University of Washington", cause: "Education", amount: 28000 },
  { date: "2025-04", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2025-09", what: "Tri Valley Haven", cause: "Domestic violence", amount: 300 },
  { date: "2025-09", what: "Takaya Support", cause: "Hunger", amount: 200000 },
  { date: "2025-11", what: "University of California", cause: "Education", amount: 20000 },
  { date: "2025-11", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2025-12", what: "University of Washington", cause: "Education", amount: 24000 },
  { date: "2026-04", what: "Takaya Support", cause: "Hunger", amount: 300000 },
  { date: "2026-04", what: "Tri Valley Haven", cause: "Homelessness", amount: 2000 },
  { date: "2026-10", what: "Tri Valley Haven", cause: "Domestic violence", amount: 3000 },
  { date: "2026-10", what: "Takaya Support", cause: "Hunger", amount: 155000 },
  { date: "2026-10", what: "Takaya Support", cause: "Disaster relief", amount: 50000 },
  { date: "2026-11", what: "University of California", cause: "Education", amount: 20000 },
  { date: "2026-11", what: "Tri Valley Haven", cause: "Homelessness", amount: 2000 },
  { date: "2026-11", what: "University of Washington", cause: "Education", amount: 20000 },
];

// The AI assessment shown at the top of Givings. It is plain text written from the givings above (edit freely);
// "givings" is how many givings existed when it was written, so the page can say when newer givings are not covered yet.
window.GOOD_VERDICT = {
  gifts: 19, asOf: "2026-11", by: "Claude",
  headline: "From steady education giving to large, concentrated humanitarian relief.",
  points: [
    ["The trend is steep.", "Giving went from about $2,000 in 2020 to about $28,000 in 2024, then about $344,000 in 2025 and about $552,000 so far in 2026. Those last two years hold 93% of the roughly $962,000 given since 2020."],
    ["Education is the constant.", "There has been an education giving every year since 2020, now about $40,000 a year across the University of Washington and the University of California. Its share of each year's giving fell from 100% to 7% as relief giving grew."],
    ["The focus is Hunger and Disaster relief.", "They make up 84% of all dollars, and every dollar of it goes to one recipient, Takaya Support in Sudan (6 givings). That is conviction and repeat giving rather than scattering, but it also means everything rides on one channel, so it is worth checking its reported outcomes now and then."],
    ["The small givings stay close to home.", "Tri Valley Haven has received 4 givings totalling about $7,300 (under 1% of dollars), moving from domestic violence (about $300, then $3,000) to homelessness. Small in dollars, but it is the one local, recurring thread."],
  ],
};
