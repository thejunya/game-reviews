export interface IFooterLink extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  link: string;
  children: React.ReactNode;
}

export interface IFooterTitle {
  children: string;
}

export interface IFooterCopyright {
  year: number;
  websiteName: string;
  link: string;
}
