"use client";
import Title from "@/components/atomics/title";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CardCollector({
  id,
  image,
  title,
}: {
  id: string;
  image: string;
  title: string;
}) {
  const router = useRouter();

  const url = `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`;

  return (
    <div className="group relative block overflow-hidden rounded-lg">
      <Image src={url} alt={title} width={300} height={300} unoptimized />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white"
          onClick={() => router.push(`/collector/${id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default CardCollector;
