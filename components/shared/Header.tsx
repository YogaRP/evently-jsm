import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItem />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3 items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
