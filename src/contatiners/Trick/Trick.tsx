import { useState } from "react";
import Tricks from "../../components/Trick/Tricks";
import { TrickData } from "../../types";
import trick1 from "../../assets/images/trick-treat1-img.png";
import trick2 from "../../assets/images/trick-treat2-img.png";
import trick3 from "../../assets/images/trick-treat3-img.png";
import trick4 from "../../assets/images/trick-treat4-img.png";
import trick5 from "../../assets/images/trick-treat5-img.png";
import trick6 from "../../assets/images/trick-treat6-img.png";

const Trick = () => {
  const [tricks, setTricks] = useState<TrickData[]>([
    {
      img: trick1,
      title: "Toffee",
      subtitle: "Candy",
      price: 11.99,
    },
    {
      img: trick2,
      title: "Bone",
      subtitle: "Accessory",
      price: 8.99,
    },
    {
      img: trick3,
      title: "Scarecrow",
      subtitle: "Candy",
      price: 15.99,
    },
    {
      img: trick4,
      title: "Candy Cane",
      subtitle: "Candy",
      price: 7.99,
    },
    {
      img: trick5,
      title: "Pumpkin",
      subtitle: "Accessory",
      price: 19.99,
    },
    {
      img: trick6,
      title: "Ghost",
      subtitle: "Accessory",
      price: 17.99,
    },
  ]);

  return <Tricks tricks={tricks} />;
};

export default Trick;