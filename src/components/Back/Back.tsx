import "./Back.component.css";

import thank from "../../assets/illustration-thank-you.svg";

interface Props {
  screen: boolean;
  rate: number;
}

export const Back = ({ screen, rate }: Props) => {
  return (
    <div className="rating-back" style={{ display: screen ? "flex" : "none" }}>
      <div>
        <img src={thank} alt="thank" />
      </div>

      <div>
        <p>
          You selected <span>{rate}</span> out of 5
        </p>
      </div>
      <div>
        <h1>Thank you!</h1>
      </div>

      <div>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};
