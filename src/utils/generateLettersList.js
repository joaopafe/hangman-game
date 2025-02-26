/**
 * Get a letter list with name and show informations
 * @param {string} word
 * @returns {object} letter
 */

export const generateLettersList = (word) => {
  const lettersList = word.split("");

  let lettersObject = [];

  for (const letter of lettersList) {
    lettersObject.push({
      name: letter,
      show: false,
    });
  }

  return lettersObject;
};
