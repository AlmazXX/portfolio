export interface HomeData {
  img: string;
  imgTitle: string;
  imgSubtitle: string;
  title: string[];
  subtitle: string;
  description: string;
}

export interface CategoryData {
  img: string;
  title: string;
  description: string;
}

export interface TrickData {
  img: string;
  title: string;
  subtitle: string;
  price: number;
}

export interface NewData {
  tag: string;
  img: string;
  title: string;
  subtitle: string;
  price: number;
  discount: number;
}