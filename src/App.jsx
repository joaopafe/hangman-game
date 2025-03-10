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

  const updateGallowStep = () => {
    if (gallowStep < 7) setGallowStep(gallowStep + 1);

    if (gallowStep === 7) {
      window.alert("Você perdeu. Tente novamente!");

      setGallowStep(1);

      updateWord();

      setButtonLetterList(generateButtonLetterList);
    }
  };

  const updateWord = () => {
    const newWord = raffleWord(words);

    setGallowStep(1);

    setWord(newWord);
    updateLetters(newWord.name);

    setButtonLetterList(generateButtonLetterList);
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

    checkPlay(buttonletterForUpdate, letters);
  };

  const checkPlay = (playedLetter, letters) => {
    const matchedLetters = letters
      .map((letter, index) => ({ letter, index }))
      .filter((obj) => obj.letter.name === playedLetter);

    if (matchedLetters.length != 0) {
      const newLetters = letters;

      for (const matchedLetter of matchedLetters) {
        newLetters[matchedLetter.index].show = true;
      }

      setLetters(newLetters);
    } else {
      updateGallowStep();
    }
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
