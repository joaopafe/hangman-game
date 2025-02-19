import { useState } from "react";
import { Gallow } from "./components/Gallow";

const App = () => {
  const [gallowStep, setGallowStep] = useState(1);

  const updateGallowStep = () => setGallowStep(gallowStep + 1);

  return (
    <>
      <Gallow gallowStep={gallowStep} />
    </>
  );
};

export default App;
