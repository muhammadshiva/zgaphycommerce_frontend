"use client";
import { DealsProps } from "@/interfaces/landing-page";
import { moneyFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

function CardArtwork() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="group relative block overflow-hidden rounded-t-lg">
        {/* <img
          className="p-4 transition-transform duration-300 group-hover:scale-105"
          src="/images/ilustration-artwork.png"
          alt="product image"
        /> */}

        <Image
          src={"/images/ilustration-artwork.png"}
          width={250}
          height={250}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white">
            View Details
          </button>
        </div>
      </div>

      <div className="flex flex-col p-4 gap-y-1">
        <h4 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white lg:text-xl">
          Fight Againts A.I
        </h4>
        <span className="text-xl font-bold text-gray-900 dark:text-white lg:text-xl">
          Rp. 100.000
        </span>
        <button className="rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CardArtwork;
