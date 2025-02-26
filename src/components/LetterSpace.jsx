export const LetterSpace = ({ letter, show }) => {
  return (
    <div className="letter-space">
      {letter == " " ? (
        <>
          <div>-</div>
        </>
      ) : (
        <>
          <div style={show ? { display: "flex" } : { display: "none" }}>
            {letter}
          </div>
          <div>_</div>
        </>
      )}
    </div>
  );
};
