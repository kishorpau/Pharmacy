import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignUpButton mode="modal" fallbackRedirectUrl="/home" />
      <SignInButton mode="modal" fallbackRedirectUrl="/home" />
      <UserButton />
    </div>
  );
}
