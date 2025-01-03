"use client";

import Title from "@/components/atomics/title";
import CardArtwork from "@/components/molecules/card/card-artworks";
import { useGetAllArtworkQuery } from "@/services/artwork.service";
import Image from "next/image";

// Define the type for the artwork item
interface ArtworkItem {
  id: string;
  image: string;
  title: string;
  slug: string;
  price: number;
  artist: string;
  description: string;
}

function Artwork() {
  const { data: artworks } = useGetAllArtworkQuery({});

  return (
    <div className="bg-[#0D0E25] h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center pt-44 h-full">
        <div className="flex justify-center text-center">
          <Title
            title={"List of Artworks"}
            subtitle={"Get the best artwork you deserve"}
            section="hero-white"
          />
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-16">
          <div className="grid grid-cols-4 gap-20">
            {artworks?.data?.data.map((item: ArtworkItem) => (
              <CardArtwork
                key={item.id}
                image={item.image}
                title={item.title}
                slug={item.slug}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artwork;
