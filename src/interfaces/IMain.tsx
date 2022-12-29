export interface IMain extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background: string;
}

export interface IMainText {
  children: string;
}

export interface IMainCarousel extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  items: IMainCarouselItem[];
}

export interface IMainCarouselItem {
  key: number;
  src: string;
}
