import { NewData } from "../../types";

interface Props {
  newData: NewData;
}

const NewItem: React.FC<Props> = ({ newData }) => {
  return (
    <>
      <div className="new__tag">{newData.tag}</div>
      <img src={newData.img} alt={newData.title} className="new__img" />
      <h3 className="new__title">{newData.title}</h3>
      <span className="new__subtitle">{newData.subtitle}</span>

      <div className="new__prices">
        <span className="new__price">${newData.price}</span>
        <span className="new__discount">${newData.discount}</span>
      </div>

      <button className="button new__button">
        <i className="bx bx-cart-alt new__icon"></i>
      </button>
    </>
  );
};

export default NewItem;