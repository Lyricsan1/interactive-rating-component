import "./Rating.component.css";
import star from "../../assets/icon-star.svg";

interface MyRatingProps {
  selectedRating: (event: number) => void;
  isBtnDisabled: boolean;
  handleDisplay: () => void;
  screen: boolean;
}

export const Rating = ({
  selectedRating,
  isBtnDisabled,
  handleDisplay,
  screen,
}: MyRatingProps) => {
  const handleSelectRating = (event: number) => {
    selectedRating(event);
  };

  return (
    <div className="rating" style={{ display: screen ? "none" : "block" }}>
      <div className="star-container">
        <img src={star} alt="star" />
      </div>
      <h1>How did we do</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="btn-container">
        {[1, 2, 3, 4, 5].map((btn) => {
          return (
            <button onClick={() => handleSelectRating(btn)} key={btn}>
              {btn}
            </button>
          );
        })}
      </div>

      <button
        disabled={isBtnDisabled}
        onClick={handleDisplay}
        className="submit-button"
      >
        submit
      </button>
    </div>
  );
};
