import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import category1 from "../../assets/images/category1-img.png";
import category2 from "../../assets/images/category2-img.png";
import category3 from "../../assets/images/category3-img.png";
import home1 from "../../assets/images/home1-img.png";
import home2 from "../../assets/images/home2-img.png";
import home3 from "../../assets/images/home3-img.png";
import Category from "../../components/Category/Category";
import HomeItem from "../../components/HomeItem/HomeItem";
import { CategoryData, HomeData } from "../../types";

const Home = () => {
  const [homeItems, setHomeItems] = useState<HomeData[]>([
    {
      img: home1,
      imgTitle: "The Labu “Reiza”",
      imgSubtitle: "The Living Pumpkin",
      title: ["UOOOO", "TRICK OR", "TREAT!!"],
      subtitle: "#1 Top Scariest Ghost",
      description: `Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn something new, building my own bike with parts made only in Malaysia.`,
    },
    {
      img: home2,
      imgTitle: "Adino & Grahami",
      imgSubtitle: "No words can describe them",
      title: ["BRING BACK", "MY COTTON", "CANDY"],
      subtitle: "#2 top Best duo",
      description: `Adino steals cotton candy from his brother and eats them all in one bite, a hungry beast. Grahami can no longer contain his anger towards Adino.`,
    },
    {
      img: home3,
      imgTitle: "The Labu “Reiza”",
      imgSubtitle: "The Living Pumpkin",
      title: ["UOOOO", "TRICK OR", "TREAT!!"],
      subtitle: "#1 Top Scariest Ghost",
      description: `Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn something new, building my own bike with parts made only in Malaysia.`,
    },
  ]);

  const [categories, setCategories] = useState<CategoryData[]>([
    {
      img: category1,
      title: "Ghosts",
      description: "Choose the ghosts, the scariest there are.",
    },
    {
      img: category2,
      title: "Pumpkins",
      description: "You look at the scariest pumpkins there is.",
    },
    {
      img: category3,
      title: "Witch Hat",
      description: "Pick the most stylish witch hats out there.",
    },
  ]);

  return (
    <>
      <section className="container home">
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
        >
          {homeItems.map((h) => (
            <SwiperSlide key={h.img}>
              <HomeItem homeItem={h} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Category categories={categories} />
    </>
  );
};

export default Home;