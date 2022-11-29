import { useState } from "react";
import News from "../../components/News/News";
import { NewData } from "../../types";
import new1 from "../../assets/images/new1-img.png";
import new2 from "../../assets/images/new2-img.png";
import new3 from "../../assets/images/new3-img.png";
import new4 from "../../assets/images/new4-img.png";
import new5 from "../../assets/images/new5-img.png";
import new6 from "../../assets/images/new6-img.png";

const New = () => {
  const [news, setNews] = useState<NewData[]>([
    {
      tag: "New",
      img: new1,
      title: "Haunted House",
      subtitle: "Accessory",
      price: 14.99,
      discount: 24.99,
    },
    {
      tag: "New",
      img: new2,
      title: "Halloween Candle",
      subtitle: "Accessory",
      price: 11.99,
      discount: 21.99,
    },
    {
      tag: "New",
      img: new3,
      title: "Witch Hat",
      subtitle: "Accessory",
      price: 4.99,
      discount: 9.99,
    },
    {
      tag: "New",
      img: new4,
      title: "Rip",
      subtitle: "Accessory",
      price: 24.99,
      discount: 44.99,
    },
    {
      tag: "New",
      img: new5,
      title: "Terrifying Crystal Ball",
      subtitle: "Accessory",
      price: 5.99,
      discount: 12.99,
    },
    {
      tag: "New",
      img: new6,
      title: "Witch Broom",
      subtitle: "Accessory",
      price: 7.99,
      discount: 14.99,
    },
  ]);

  return <News news={news} />;
};

export default New;