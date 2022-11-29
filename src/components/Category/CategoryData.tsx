import { CategoryData } from "../../types";

interface Props {
  category: CategoryData;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  return (
    <div className="category__data">
      <img src={category.img} alt={category.title} className="category__img" />
      <h3 className="category__title">{category.title}</h3>
      <p className="category__description">{category.description}</p>
    </div>
  );
};

export default CategoryItem;
