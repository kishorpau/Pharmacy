import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div>Hello this is home page</div>
      <UserButton afterSignOutUrl="/hello" />
      <Link href="/shopform">
        <Button variant="destructive">set a shop</Button>
      </Link>
    </>
  );
};

export default page;
