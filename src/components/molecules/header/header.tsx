"use client";
import { Button } from "@/components/atomics/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atomics/dropdown-menu";
import Title from "@/components/atomics/title";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  console.log("🚀 ~ Header ~ session:", session);

  return (
    <header className="container mx-auto fixed inset-x-0 top-[30px] z-20">
      <div className="p-[30px] rounded-[30px] bg-white flex justify-between items-center">
        <Link href="/">
          <div className="flex flex-row items-center gap-x-4">
            <Image
              src="/icons/ic_zgaphy.png"
              alt="nidejia"
              height={50}
              width={50}
            />

            <p className="hidden self-center whitespace-nowrap text-2xl font-bold lg:block">
              ZGAPHY
            </p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center space-x-[30px]">
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              Featured
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              Categories
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              Testimonials
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              About
            </li>
          </ul>
        </nav>

        <div
          data-login={!!session?.user}
          className="data-[login=true]:hidden data-[login=false]:flex items-center space-x-3"
        >
          <Button variant="secondary" size="header">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="header" className="shadow-button bg-orange-500">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger
            data-login={!!session?.user}
            className="data-[login=false]:hidden outline-none"
          >
            <div className="flex items-center space-x-2">
              <Title
                title={session?.user.name}
                subtitle="Howdy"
                section="header"
              />
              <Image
                src="/icons/ic_zgaphy.png"
                alt="avatar"
                height={48}
                width={48}
                className="rounded-full"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px] mr-8 space-y-4">
            <DropdownMenuItem>
              <Link href={"/dashboard"}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/my-listings"}>My Listings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>My Rentals</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
