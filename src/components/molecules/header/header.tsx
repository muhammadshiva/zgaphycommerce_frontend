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
  const [cartCount, setCartCount] = useState(2); // Simpan jumlah barang yang telah di-checkout

  return (
    <header className="container mx-auto fixed inset-x-0 top-[30px] z-20">
      <div className="p-[30px] rounded-[30px] bg-white flex justify-between items-center shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
        <Link href="/">
          <div className="flex flex-row items-center gap-x-4">
            <Image
              src="/icons/ic_zgaphy.png"
              alt="ZGAPHY"
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
              Home
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              <Link href="/artwork">List Artworks</Link>
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              The Collectors
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              Contact
            </li>
            <li className="cursor-pointer font-semibold leading-6 hover:text-primary">
              FAQ
            </li>
          </ul>
        </nav>

        <div className="flex flex-row gap-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative">
              {/* Ubah ikon berdasarkan cartCount */}
              <Image
                src={
                  cartCount > 0 ? "/icons/cart-filled.svg" : "/icons/cart.svg"
                }
                alt="Cart"
                height={24}
                width={24}
                className="cursor-pointer"
              />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[400px] mr-8 space-y-6">
              <p className="font-bold text-[18px] text-gray-900">
                Shopping Cart{" "}
                <span className="text-[16px] font-medium text-gray-400">
                  ({cartCount}) items
                </span>
              </p>

              {/* Render Item dalam Keranjang */}
              <CardArtworkCart />
              <CardArtworkCart />

              <div className="flex flex-col items-end justify-end gap-y-1">
                <p className="text-[16px] ">Total</p>
                <p className="text-[20px] font-bold text-orange-500">
                  Rp. 120.000
                </p>
              </div>
              <Button className="bg-orange-500">
                <Link href={"/checkout"}>Checkout</Link>
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>

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
      </div>
    </header>
  );
}

export default Header;
