import { DetailedHTMLProps, Dispatch, HtmlHTMLAttributes, ReactNode, SetStateAction } from "react";

export interface ModalProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}