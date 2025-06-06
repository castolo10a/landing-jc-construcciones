import { LinkProps } from "react-scroll";

export interface ScrollButtonProps extends Partial<LinkProps> {
  label: string;
  to: string;
  className?: string;
}