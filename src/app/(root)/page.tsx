import { Button } from "@/components/atomics/button";
import { Input } from "@/components/atomics/input";
import { Separator } from "@/components/atomics/separator";
import Title from "@/components/atomics/title";
import ArtworkShowcase from "@/components/molecules/artwork/artwork-showcase";
import CardIndicator from "@/components/molecules/card/card-indicator";
import Image from "next/image";

function Home() {
  return (
    <main className="bg-orange-500">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="bg-[#0D0E25] bg-cover bg-center lg:bg-right min-h-[500px] lg:min-h-[750px] h-[950px]"
      >
        <div className="pt-20 lg:pt-[226px] container mx-auto px-5 lg:px-0">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col ml-20">
              <h1 class="text-outline font-light text-white mb-4 text-3xl dark:text-white md:text-5xl lg:text-8xl">
                <span class="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-blaka text-transparent">
                  Zgaphy World Where Collectors Gather
                </span>
              </h1>

              <p className="dark:text-white-400 mb-6 text-lg font-normal text-white">
                We provide a variety of beautiful artworks that can make <br />{" "}
                your life more colorful.
              </p>

              <Button className="w-fit bg-orange-500">
                How to get collector code ?
              </Button>
            </div>

            <Image
              src="/images/ilustration-header.png"
              alt="nidejia"
              height={600}
              width={600}
            />
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section
        id="indicator-section"
        className="px-5 lg:px-10 xl:container xl:mx-auto -mt-16 pb-9"
      >
        <div className="h-[550px] flex justify-center xl:justify-between items-center space-x-6 xl:space-x-12 bg-white shadow-indicator rounded-[20px] px-5 lg:px-[5px] xl:py-[29px]">
          <ArtworkShowcase
            id="deals-section"
            title="Our Latest Artworks"
            subtitle="Explore the beauty of artworks you deserve"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
