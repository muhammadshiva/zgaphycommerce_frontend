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
import { useRouter } from "next/navigation";
import CardArtworkCart from "../card/card-artwork-cart";

function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const [cartCount, setCartCount] = useState(2);
  return (
    <header className="container mx-auto fixed inset-x-0 top-[30px] z-20">
      {/* bg-white on scroll down */}
      <div className="p-[30px] rounded-[30px] flex flex-row items-center justify-between">
        {" "}
        <Link href="/">
          <div className="flex flex-row items-center gap-x-4">
            <Image
              src="/icons/ic_zgaphy.png"
              alt="ZGAPHY"
              height={50}
              width={50}
            />
            <p className="text-white font-semibold text-2xl">Zgaphy World</p>
          </div>
        </Link>
        {/* text-black on scroll down */}
        <nav>
          <ul className="flex items-center space-x-[30px]">
            <li className="cursor-pointer text-white font-semibold leading-6 hover:text-primary">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer text-white font-semibold leading-6 hover:text-primary">
              <Link href="/artwork">List Artworks</Link>
            </li>
            <li className="cursor-pointer text-white font-semibold leading-6 hover:text-primary">
              <Link href="/collector">The Collectors</Link>
            </li>
            <li className="cursor-pointer text-white font-semibold leading-6 hover:text-primary">
              Contact
            </li>
            <li className="cursor-pointer text-white font-semibold leading-6 hover:text-primary">
              FAQ
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
