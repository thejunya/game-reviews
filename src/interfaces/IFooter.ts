export interface IFooter extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface IFooterLink extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    text: string;
    link: string;
}

export interface IFooterTitle {
    children: string;
}

export interface IFooterCopyright {
    year: number;
    text: string;
    link: string;
}
