import { Button, IButtonProps } from "../ui/button";
import { Link } from "@tanstack/react-router";

interface IButtonLink extends IButtonProps {
  to: string;
  text: string;
}

export const ButtonLink = ({ to, text, ...props }: IButtonLink) => (
  <Button asChild {...props}>
    <Link to={to}>{text}</Link>
  </Button>
);
