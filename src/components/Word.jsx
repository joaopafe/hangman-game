import { LetterSpace } from "./LetterSpace";

export const Word = ({ letters }) => {
  const formattedWord = letters.map((letter) => (
    <LetterSpace
      key={Math.floor(Math.random() * 1_000_000)}
      letter={letter.name}
      show={letter.show}
    />
  ));

  return <div>{formattedWord}</div>;
};
