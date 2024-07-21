import { SignInButton } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignUpButton mode="modal" />
      <SignInButton mode="modal" />
    </div>
  );
}
