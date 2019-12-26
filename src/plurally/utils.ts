export const cutEndingLetters = (
  string: string,
  lettersToCut: number
): string => string.substr(0, string.length - lettersToCut);
