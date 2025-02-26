/**
 * Get a raffled word of a word list
 * @param {string} words
 * @returns {string} ```raffledWord```
 */

export const raffleWord = (words) => {
  const raffledIndex = Math.floor(Math.random() * words.length);
  const raffledWord = words[raffledIndex];

  raffledWord.name = raffledWord.name.toUpperCase();

  return raffledWord;
};
