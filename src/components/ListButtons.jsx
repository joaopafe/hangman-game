import { Button } from "./Button";

export const ListButtons = ({ buttonLetterList, onUpdateButton }) => {
  const buttonsList = buttonLetterList.map((buttonLetter) => (
    <Button
      buttonLetter={buttonLetter.letter}
      disabled={buttonLetter.disabled}
      key={Math.floor(Math.random() * 1_000_000)}
      onUpdate={onUpdateButton}
    />
  ));

  return <div>{buttonsList}</div>;
};
