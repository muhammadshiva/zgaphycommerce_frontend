"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import { useState } from "react";

function CardArtwork({
  image,
  title,
  slug, // Tambahkan slug sebagai prop
  isRoot = false,
}: {
  image: string;
  title: string;
  slug: string; // Properti untuk slug halaman detail
  isRoot?: boolean;
}) {
  const [isError, setIsError] = useState(false);
  const router = useRouter(); // Inisialisasi useRouter

  return (
    <>
      {!isError ? (
        <div className="flex flex-col">
          <div className="group relative block overflow-hidden rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`}
              alt={title}
              width={350}
              height={350}
              unoptimized
              onError={() => setIsError(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* Navigasi ke halaman detail */}
              <button
                className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white"
                onClick={() => router.push(`/artwork/${slug}`)} // Navigasi ke halaman detail
              >
                View Details
              </button>
            </div>
          </div>

          <div
            className={`px-2 flex flex-row gap-x-2 mt-7 justify-between ${
              isRoot ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col gap-y-[5px]">
              <p className="text-white font-semibold text-[16px]">{title}</p>
              <p className="text-subtitle">Rp. 50.000</p>
            </div>
            <Image
              src="/icons/cart-filled.svg"
              alt="language"
              height={24}
              width={24}
              className="cursor-pointer"
            />
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
