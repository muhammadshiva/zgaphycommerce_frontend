"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/atomics/button";
import { formatPrice } from "@/lib/utils";

function CardArtwork({
  image,
  title,
  slug,
  price,
  isRoot = false,
}: {
  image: string;
  title: string;
  slug: string;
  price: number;
  isRoot?: boolean;
}) {
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const url = `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`;

  return (
    <>
      {!isError ? (
        <div className="flex flex-col">
          <div className="group relative block overflow-hidden rounded-lg">
            <Image
              src={url}
              alt={title}
              width={350}
              height={350}
              unoptimized
              onError={() => setIsError(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white"
                onClick={() => router.push(`/artwork/${slug}`)}
              >
                View Details
              </button>
            </div>
          </div>

          <div
            className={`px-2 flex flex-col gap-y-4 mt-7 justify-between ${
              isRoot ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col gap-y-[5px]">
              <p className="text-white font-semibold text-[16px] line-clamp-1">
                {title}
              </p>
              <p className="text-subtitle">Zgaphy Warrior</p>
              {/* <p className="font-bold text-orange-500 text-[20px]">
                {formatPrice(price)}
              </p> */}
            </div>
            {/* 
            <Button
              onClick={() => router.push("/checkout")}
              className="bg-green-500 rounded-lg"
            >
              <div className="flex flex-row gap-x-2">
                <Image
                  src="/icons/whatsapp.svg"
                  alt="arrow-left"
                  height={20}
                  width={20}
                />
                <span className="font-medium text-sm">Order via WhatApp</span>
              </div>
            </Button> */}
          </div>
        </div>
      ) : (
        <div className="w-80 h-80 gap-3 flex flex-col items-center justify-center rounded-lg bg-gray-300">
          <Image
            src="/images/error-image.png"
            alt="error"
            height={50}
            width={50}
          />
          <p className="text-[#ABABAB]">No Image</p>
        </div>
      )}
    </>
  );
}

export default CardArtwork;

// function CardDeals({
//   image,
//   title,
//   slug,
//   price,
//   wide,
//   capacity,
//   wifi,
// }: DealsProps) {
//   return (
//     <Link href={slug}>
//       <figure className="relative">
//         {image ? (
//           <Image
//             src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
//             alt={title}
//             height={0}
//             width={0}
//             className="w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] rounded-3xl object-cover bg-gray-300"
//             unoptimized
//           />
//         ) : (
//           <div className="w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] rounded-3xl object-cover bg-gray-300" />
//         )}

//         <div className="absolute flex flex-col p-5 top-0 rounded-3xl w-[220px] h-[310px] xl:w-[260px] xl:h-[350px] text-white bg-gradient-to-t from-gradient-black to-transparent to-[45%]">
//           <div className="mt-auto">
//             <div className="flex items-center justify-between">
//               <div>
//                 <span className="block font-bold text-xl leading-[30px]">
//                   {title}
//                 </span>
//                 <span className="block text-sm leading-[21px]">
//                   <span className="font-semibold">
//                     {moneyFormat.format(price)}
//                   </span>
//                   /mo
//                 </span>
//               </div>
//               <div className="flex items-center text-sm leading-[21px]">
//                 <Image
//                   src="/icons/star.svg"
//                   alt="star-icon"
//                   height={0}
//                   width={0}
//                   className="w-5 h-5 mr-[0.5px] -mt-1"
//                 />
//                 4/5
//               </div>
//             </div>

//             <div className="flex items-center justify-between mt-[14px]">
//               <div className="flex items-center text-sm leading-[21px]">
//                 <Image
//                   src="/icons/format-square.svg"
//                   alt="square-icon"
//                   height={0}
//                   width={0}
//                   className="w-5 h-5 mr-1"
//                 />
//                 {wide} sqft
//               </div>
//               <div className="flex items-center text-sm leading-[21px]">
//                 <Image
//                   src="/icons/profile-2user.svg"
//                   alt="profile-icon"
//                   height={0}
//                   width={0}
//                   className="w-5 h-5 mr-1"
//                 />
//                 {capacity}
//               </div>
//               <div className="flex items-center text-sm leading-[21px]">
//                 <Image
//                   src="/icons/wifi.svg"
//                   alt="wifi-icon"
//                   height={0}
//                   width={0}
//                   className="w-5 h-5 mr-1"
//                 />
//                 {wifi}gb
//               </div>
//             </div>
//           </div>
//         </div>
//       </figure>
//     </Link>
//   );
// }

// export default CardDeals;
