import { CategoryData } from "../../types";
import "./Category.css";
import CategoryItem from "./CategoryData";

interface Props {
  categories: CategoryData[];
}
const Category: React.FC<Props> = ({ categories }) => {
  return (
    <section className="section category">
      <h2 className="section__title">
        Favorite Scare <br />
        Category
      </h2>
      <div className="category__container container grid">
        {categories.map((category) => (
          <CategoryItem key={category.img} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Category;