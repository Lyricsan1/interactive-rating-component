import { useState } from "react";
import { Rating } from "./components/Rating/Rating";
import { Back } from "./components/Back/Back";

const App = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [showDisplay, setShowDisplay] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);

  const handleSelectedRating = (event: number) => {
    setIsDisabled(false);
    setRate(event);
    console.log(event);
  };

  const handleShowDisplay = () => {
    setShowDisplay(true);
    console.log("hey");
  };

  return (
    <>
      <Rating
        selectedRating={handleSelectedRating}
        isBtnDisabled={isDisabled}
        handleDisplay={handleShowDisplay}
        screen={showDisplay}
      />

      <Back screen={showDisplay} rate={rate} />
    </>
  );
};

export default App;
