import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/tanstack-react-start";
import { Button } from "../ui/button";
import { ButtonLink } from "./button-link";

export const LinksOrLogin = () => (
  <>
    <SignedIn>
      <ButtonLink to="/dashboard" text="Go To Your Dashboard" size="lg" />
      <Button asChild size="lg" variant="outline" className="mt-1">
        <SignOutButton />
      </Button>
    </SignedIn>
    <SignedOut>
      <div className="flex gap-2 items-center justify-center">
        <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700">
          <SignInButton />
        </Button>
        <Button asChild size="lg">
          <SignUpButton />
        </Button>
      </div>
    </SignedOut>
  </>
);
