export interface IMain extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background: string;
}

export interface IMainTitle {
  children: string;
  color: string;
}

export interface IMainText {
  children: string;
  size: number;
  color: string;
}

export interface IMainCarousel extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  items: IMainCarouselItem[];
}

export interface IMainCarouselItem {
  key: number;
  src: string;
}
