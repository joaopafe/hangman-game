import { useState } from "react";

import { Gallow } from "./components/Gallow";
import { Word } from "./components/Word";
import { Clue } from "./components/Clue";
import { ListButtons } from "./components/ListButtons";

import { words } from "../public/data/words";

import { raffleWord } from "./utils/raffleWord";
import { generateLettersList } from "./utils/generateLettersList";
import { generateButtonLetterList } from "./utils/generateButtonLetterList";

const App = () => {
  const [gallowStep, setGallowStep] = useState(1);
  const [word, setWord] = useState(raffleWord(words));
  const [letters, setLetters] = useState(generateLettersList(word.name));
  const [buttonLetterList, setButtonLetterList] = useState(
    generateButtonLetterList()
  );

  const updateGallowStep = () => setGallowStep(gallowStep + 1);

  const updateWord = () => {
    const newWord = raffleWord(words);

    setWord(newWord);
    updateLetters(newWord.name);
  };

  const updateLetters = (word) => {
    const newLetters = generateLettersList(word);

    setLetters(newLetters);
  };

  const updateButton = (buttonletterForUpdate) => {
    setButtonLetterList(
      buttonLetterList.map((buttonLetter) => {
        return buttonLetter.letter === buttonletterForUpdate
          ? { ...buttonLetter, disabled: true }
          : buttonLetter;
      })
    );
  };

  return (
    <>
      <button onClick={updateWord}>Novo jogo</button>

      <Gallow gallowStep={gallowStep} />

      <Word letters={letters} />

      <Clue clue={word.clue} />

      <ListButtons
        buttonLetterList={buttonLetterList}
        onUpdateButton={updateButton}
      />
    </>
  );
};

export default App;
