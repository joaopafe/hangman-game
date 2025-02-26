/**
 * Get a button letter list (A - Z)
 * @returns button letter list
 */

export const generateButtonLetterList = () => {
  const buttonLetterList = [];

  for (let i = 65; i <= 90; i++) {
    buttonLetterList.push({
      letter: String.fromCharCode(i),
      disabled: false,
    });
  }

  return buttonLetterList;
};
