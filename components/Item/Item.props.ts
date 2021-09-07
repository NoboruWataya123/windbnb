import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface ItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}