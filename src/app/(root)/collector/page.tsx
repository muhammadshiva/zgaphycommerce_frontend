"use client";

import Title from "@/components/atomics/title";
import CardArtwork from "@/components/molecules/card/card-artworks";
import CardCollector from "@/components/molecules/card/card-collector";
import { useGetCollectorsQuery } from "@/services/collector.service";
import Image from "next/image";

interface CollectorItem {
  artwork: {
    id: string;
    image: string;
    title: string;
  };
}
function Collector() {
  const { data: collectors } = useGetCollectorsQuery({});

  // Log response to the console
  console.log("Collectors Response:", collectors);

  return (
    <div className="bg-[#0D0E25] h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center pt-44 h-full">
        <p className="font-blaka text-orange-500 text-[60px]">
          I'm Collector!!!
        </p>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-10">
          <div className="grid grid-cols-4 gap-20">
            {collectors?.data.map((item: CollectorItem) => (
              <CardCollector
                id={item.artwork.id}
                image={item.artwork.image}
                title={item.artwork.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collector;
