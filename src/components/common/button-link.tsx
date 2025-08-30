import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

interface IButtonLink {
  to: string;
  text: string;
}

export const ButtonLink = ({ to, text }: IButtonLink) => {
  return (
    <Button asChild>
      <Link to={to}>{text}</Link>
    </Button>
  );
};
