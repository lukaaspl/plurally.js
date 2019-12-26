import { ExceptionalWord } from "./types";

export const exceptionalWords: ExceptionalWord[] = [
  { singular: "man", plural: "men" },
  { singular: "woman", plural: "women" },
  { singular: "child", plural: "children" },
  { singular: "die", plural: "dice" },
  { singular: "mouse", plural: "mice" },
  { singular: "foot", plural: "feet" },
  { singular: "tooth", plural: "teeth" },
  { singular: "goose", plural: "geese" }
];

export const wordsWithoutPluralForm = [
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

export const postfixes = {
  S: "s",
  ES: "es",
  VES: "ves",
  IES: "ies"
};

export const endings = {
  HISSING: ["ch", "s", "ss", "sh", "x"],
  F: "f",
  FE: "fe",
  O: "o",
  Y: "y"
};

export const exceptions = {
  F: ["roof", "chief", "handkerchief"],
  O: ["piano", "photo", "zero"]
};

export const vowels = ["a", "e", "i", "o", "u", "y"];
