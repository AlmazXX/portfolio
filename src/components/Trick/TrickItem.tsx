import { TrickData } from "../../types";

interface Props {
  trick: TrickData;
}

const TrickItem: React.FC<Props> = ({ trick }) => {
  return (
    <div className="trick__content">
      <img src={trick.img} alt={trick.title} className="trick__img" />
      <h3 className="trick__title">{trick.title}</h3>
      <span className="trick__subtitle">{trick.subtitle}</span>
      <span className="trick__price">${trick.price}</span>

      <button className="button trick__button">
        <i className="bx bx-cart-alt trick__icon"></i>
      </button>
    </div>
  );
};

export default TrickItem;