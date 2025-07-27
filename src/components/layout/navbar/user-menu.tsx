import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/tanstack-react-start";
import { ChartColumnBigIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { useNavigate } from "@tanstack/react-router";

const UserMenu = () => {
  const navigate = useNavigate();
  const goToTheDasboard = () => navigate({ to: "/dashboard" });

  return (
    <div>
      <SignedOut>
        <div className="text-white flex items-center">
          <Button asChild variant="link" className="text-white">
            <SignInButton />
          </Button>
          <div className="w-[1px] h-8 bg-zinc-400" />
          <Button asChild variant="link" className="text-white">
            <SignUpButton />
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonAvatarBox: {
                border: "1px solid white",
              },
              userButtonOuterIdentifier: {
                color: "white",
              },
            },
          }}
        >
          <UserButton.MenuItems>
            <UserButton.Action
              label="Dashboard"
              labelIcon={<ChartColumnBigIcon size={16} />}
              onClick={goToTheDasboard}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </div>
  );
};

export default UserMenu;
