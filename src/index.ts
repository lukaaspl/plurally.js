import plurally from "./plurally";

const app = document.getElementById("app");

const examples = [
  "dog",
  "week",
  "car",
  "bed",
  "year",
  "dress",
  "box",
  "fox",
  "bush",
  "bus",
  "watch",
  "bridge",
  "nose",
  "horse",
  "rose",
  "prize",
  "price",
  "tomato",
  "potato",
  "hero",
  "piano",
  "photo",
  "zero",
  "wife",
  "knife",
  "shelf",
  "wolf",
  "loaf",
  "life",
  "half",
  "thief",
  "chief",
  "roof",
  "handkerchief",
  "lady",
  "city",
  "country",
  "story",
  "fly",
  "baby",
  "day",
  "boy",
  "key",
  "toy",
  "man",
  "woman",
  "child",
  "die",
  "mouse",
  "foot",
  "tooth",
  "goose",
  "fish",
  "sheep",
  "species",
  "swine",
  "fruit",
  "carp",
  "trousers",
  "jeans",
  "shorts",
  "scissors",
  "clothes",
  "news",
  "physics",
  "politics",
  "statistics"
];

let currentIndex = examples.length,
  temporaryValue: any,
  randomIndex: number;

while (currentIndex !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  temporaryValue = examples[currentIndex];
  examples[currentIndex] = examples[randomIndex];
  examples[randomIndex] = temporaryValue;
}

examples.forEach((example, index) => {
  const item = document.createElement("div");

  item.className = "example";
  item.innerHTML = `1 ${example}<br><strong>${plurally(
    index + 2,
    example
  )}</strong>`;

  app.appendChild(item);
});
