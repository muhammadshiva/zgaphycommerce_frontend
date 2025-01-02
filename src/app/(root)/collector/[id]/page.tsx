"use client";

import { useParams } from "next/navigation";
import { useGetCollectorDetailQuery } from "@/services/collector.service";
import Image from "next/image";
import Title from "@/components/atomics/title";

function CollectorDetail() {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const { data: collector, isLoading, error } = useGetCollectorDetailQuery(id);

  if (isLoading) {
    return <p>Loading collector details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Failed to load collector details.</p>;
  }

  // Ambil URL gambar pertama
  const url = collector?.data[0]?.artwork?.image
    ? `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${collector?.data[0]?.artwork?.image}`
    : "/placeholder-image.png";

  const barcodeUrl = `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/`;

  return (
    <main>
      <section className="bg-[#0D0E25] h-screen w-screen">
        <div className="flex flex-col items-center justify-center pt-48 gap-y-4">
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={url}
              alt="Artwork Image"
              width={200}
              height={200}
              unoptimized
            />
            <div className="w-[400px]">
              <p className="mt-4 text-white font-semibold text-2xl text-center">
                {collector?.data[0]?.artwork?.title || "Untitled Artwork"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            {collector?.data?.map((item: Collector) => (
              <div className="flex flex-col items-center gap-y-4">
                <Image
                  src={`${barcodeUrl}${item.image_barcode}`}
                  alt="Barcode Image"
                  width={250}
                  height={100}
                  unoptimized
                />
                <Title
                  title={item.name}
                  subtitle={item.address}
                  section="white-subtitle"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CollectorDetail;

{
  /* {collector?.data?.map((item: Collector) => (
          <p className="text-white">{item.name}</p>
        ))} */
}
