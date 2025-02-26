export const Button = ({ buttonLetter, disabled, onUpdate }) => {
  return (
    <button
      onClick={() => onUpdate(buttonLetter)}
      disabled={disabled}
      className="button"
    >
      {buttonLetter}
    </button>
  );
};
