import { Link } from "@tanstack/react-router";
import { ChartColumnBigIcon } from "lucide-react";
import UserMenu from "./user-menu";

export const Navbar = () => (
  <nav className="flex items-center justify-between bg-primary p-4 h-20 text-white">
    <Link to="/" className="flex gap-2 items-center font-bold text-2xl">
      <ChartColumnBigIcon />
      MoneyTracker
    </Link>
    <UserMenu />
  </nav>
);
