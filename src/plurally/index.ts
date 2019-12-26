import { cutEndingLetters } from "./utils";
import {
  exceptionalWords,
  wordsWithoutPluralForm,
  vowels,
  postfixes,
  endings,
  exceptions
} from "./config";

export default (value: number, label: string) => {
  if (Math.abs(value) < 2) return `${value} ${label}`;

  let postfix = postfixes.S;
  const lowerCasedLabel = label.toLowerCase();

  const isLabelAnException = exceptionalWords.some(
    ({ singular }) => lowerCasedLabel === singular
  );

  if (isLabelAnException) {
    const { plural } = exceptionalWords.find(
      ({ singular }) => lowerCasedLabel === singular
    );

    return `${value} ${plural}`;
  }

  const hasLabelNotPluralForm = wordsWithoutPluralForm.includes(
    lowerCasedLabel
  );

  if (hasLabelNotPluralForm) {
    return `${value} ${label}`;
  }

  const hasLabelHissingEnding = endings.HISSING.some(hissingEnding =>
    lowerCasedLabel.endsWith(hissingEnding)
  );

  if (hasLabelHissingEnding) {
    postfix = postfixes.ES;
    return `${value} ${label}${postfix}`;
  }

  if (lowerCasedLabel.endsWith(endings.F)) {
    const isLabelNotException = !exceptions.F.includes(lowerCasedLabel);

    if (isLabelNotException) {
      postfix = postfixes.VES;
      const labelWithoutLastLetter = cutEndingLetters(label, 1);
      return `${value} ${labelWithoutLastLetter}${postfix}`;
    }
  } else if (lowerCasedLabel.endsWith(endings.FE)) {
    postfix = postfixes.VES;
    const labelWithoutTwoLastLetters = cutEndingLetters(label, 2);
    return `${value} ${labelWithoutTwoLastLetters}${postfix}`;
  } else if (lowerCasedLabel.endsWith(endings.O)) {
    const isLabelNotException = !exceptions.O.includes(lowerCasedLabel);

    if (isLabelNotException) {
      postfix = postfixes.ES;
      return `${value} ${label}${postfix}`;
    }
  } else if (lowerCasedLabel.endsWith(endings.Y)) {
    const penultimateSign = lowerCasedLabel.charAt(lowerCasedLabel.length - 2);
    const isPenultimateSignNotVowel = !vowels.includes(penultimateSign);

    if (isPenultimateSignNotVowel) {
      postfix = postfixes.IES;
      const labelWithoutLastLetter = cutEndingLetters(label, 1);
      return `${value} ${labelWithoutLastLetter}${postfix}`;
    }
  }

  return `${value} ${label}${postfix}`;
};
