export const Gallow = ({ gallowStep }) => {
  console.log("Gallow Step", gallowStep);

  return (
    <div className="gallow">
      <img src={`../../images/gallow-${gallowStep}.png`} alt="gallow" />
    </div>
  );
};
