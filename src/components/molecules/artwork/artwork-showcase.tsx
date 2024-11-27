"use client";
import React from "react";
import Title from "@/components/atomics/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atomics/carousel";
import artworks from "@/json/artworks.json";
import { Artwork } from "@/interfaces/artwork";
import CardArtworks from "../card/card-artworks";

interface ArtworkShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
}

function ArtworkShowcase({ id, title, subtitle }: ArtworkShowcaseProps) {
  return (
    <section id={id} className="px-10 xl:container xl:mx-auto pt-16 pb-[100px]">
      <div className="flex justify-center text-center">
        <Title title={title} subtitle={subtitle} />
      </div>
      <Carousel className="w-full mt-[30px]">
        <CarouselContent>
          {/* Json Data */}
          {artworks.data.map((item: Artwork) => (
            <CarouselItem key={item.id} className="basis-1/4">
              <CardArtworks
                image={item.cover || "/images/default.png"}
                title={item.title}
                slug={"/artwork/" + item.slug}
                description={item.description}
                address={item.address}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default ArtworkShowcase;

//* BACKUP CAROUSEL CONTENT
{
  /* {artworks?.data?.data.map((item: Artwork, index: number) => (
            <CarouselItem key={index} className="basis-1/4">
              <CardDeals
                image={item.attachments?.[0] || ""}
                title={item.title}
                slug={"/artwork/" + item.slug}
                price={item.price_per_day}
                wide={item.sqft}
                capacity={item.max_person}
                wifi={item.wifi_speed}
              />
            </CarouselItem>
          ))} */
}

//* BACKUP SOURCE CODE
//   const { data: artworks } = useGetAllArtworkQuery({});
// import { useGetAllListingQuery } from "@/services/listing.service";
//   const { data: artworks } = useGetAllArtworkQuery({});
