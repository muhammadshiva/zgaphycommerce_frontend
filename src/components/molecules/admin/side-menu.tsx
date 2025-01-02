import Image from "next/image";
import ItemMenu from "./item-menu";
import Title from "@/components/atomics/title";
import { Button } from "@/components/atomics/button";
import Link from "next/link";

function SideMenu() {
  return (
    <nav className="bg-white w-full max-w-[250px] px-6 py-[30px] rounded-[20px] h-fit">
      <Link href="/">
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src="/icons/ic_zgaphy.png"
            alt="nidejia"
            height={50}
            width={50}
          />

          <p className="font-bold text-xl">Zgaphy</p>
        </div>
      </Link>

      <div className="mt-[37.5px]">
        <h1 className="font-semibold text-sm leading-[21px]">General</h1>
        <ul className="mt-3.5 flex flex-col space-y-6">
          <ItemMenu image="/icons/card.svg" title="overview" url="/dashboard" />
          <ItemMenu
            image="/icons/house-2 2.svg"
            title="my artworks"
            url="/dashboard/my-artworks"
          />

          <ItemMenu
            image="/icons/card.svg"
            title="my transactions"
            url="/dashboard/my-transactions"
          />
        </ul>
      </div>

      {/* <div className="mt-[37.5px]">
        <h1 className="font-semibold text-sm leading-[21px]">Other</h1>
        <ul className="mt-3.5 flex flex-col space-y-6">
          <ItemMenu
            image="/icons/profile-2user-fill.svg"
            title="customers"
            url="/"
          />
          <ItemMenu
            image="/icons/ticket-discount.svg"
            title="vouchers"
            url="/"
          />
          <ItemMenu image="/icons/setting.svg" title="setting" url="/" />
        </ul>
      </div> */}

      {/* <div className="mt-[37.5px] bg-gray-light p-5 space-y-2 rounded-[20px]">
        <Image
          src="/icons/medal-star.svg"
          alt="medal-star"
          height={40}
          width={40}
        />
        <Title
          section="header"
          title="Unlock Features"
          subtitle="More priviledge"
        />
        <Button>Upgrade Now</Button>
      </div> */}
    </nav>
  );
}

export default SideMenu;
