import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewData } from "../../types";
import NewItem from "./NewItem";
import "./News.css";

interface Props {
  news: NewData[];
}

const News: React.FC<Props> = ({ news }) => {
  return (
    <section className="section new" id="new">
      <h2 className="section__title">New Arrivals</h2>
      <div className="new__container container">
        <Swiper
          className="new-swiper"
          modules={[Navigation]}
          navigation
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
        >
          {news.map((newData) => (
            <SwiperSlide key={newData.img} className="new__content">
              <NewItem newData={newData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default News;