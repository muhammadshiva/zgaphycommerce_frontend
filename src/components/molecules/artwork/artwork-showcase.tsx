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
// import artworks from "@/json/artworks.json";
import { Artwork } from "@/interfaces/artwork";
import CardArtworks from "../card/card-artworks";
import { useGetAllArtworkQuery } from "@/services/artwork.service";
import Link from "next/link";

interface ArtworkShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
  isRoot: boolean;
}

function ArtworkShowcase({
  id,
  title,
  subtitle,
  isRoot,
}: ArtworkShowcaseProps) {
  const { data: artworks } = useGetAllArtworkQuery({});

  return (
    <section id={id} className="px-10 xl:container xl:mx-auto pt-16 pb-[100px]">
      <div className="flex justify-center text-center">
        <Title title={title} subtitle={subtitle} />
      </div>
      <div className="flex justify-end text-right">
        <Link href="/artwork">
          <p className="font-semibold text-orange-500 text-md">Load More</p>
        </Link>
      </div>
      <Carousel className="w-full mt-[30px]">
        <CarouselContent>
          {artworks?.data?.data.map((item: Artwork) => (
            <CarouselItem key={item.id} className="basis-1/3">
              <CardArtworks
                image={item.image}
                title={item.title}
                slug={item.slug}
                price={item.price}
                description={item.description}
                address={item.address}
                isRoot={isRoot}
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
