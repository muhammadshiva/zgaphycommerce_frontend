"use client";
import { Button } from "@/components/atomics/button";
import { useGetDetailArtworkQuery } from "@/services/artwork.service";
import Image from "next/image";
import { useMemo } from "react";

function Detail({ params }: { params: { id: string } }) {
  const { data } = useGetDetailArtworkQuery(params.id);

  const artwork: Artwork | undefined = useMemo(() => data?.data, [data]);

  return (
    <main>
      {/* bg-[#0D0E25]  */}
      <section className="bg-[#0D0E25] h-screen w-screen">
        <div className="mx-auto max-w-screen-xl px-24 pt-[200px]">
          <div className="flex flex-col lg:gap-y-20">
            {/* <button
              type="button"
              onClick={() => setIsOpen(false)}
              class="mb-2 me-2 inline-flex w-fit items-center gap-x-2 rounded-lg border border-orange-400 px-5 py-2.5 text-center text-sm font-medium text-orange-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white dark:focus:ring-orange-900"
            >
              <IconArrowLeft size={20} />
              Back
            </button> */}

            <div className="flex flex-col-reverse justify-between lg:flex-row items-center">
              <div className="mt-2 flex flex-col items-center lg:mt-10">
                <p class="letter-spacing text-[24px] font-extrabold text-white lg:text-[28px]">
                  Fight Againts A.I
                </p>
                <p class="mb-4 text-[18px] font-bold text-white lg:text-[22px]">
                  Philosophy
                </p>

                <div class="div mb-5 w-[535px] lg:mb-8">
                  <p class="text-center text-[16px] font-normal lg:text-[20px] text-subtitle">
                    The existence of Al today does make human work easier, but
                    it also poses a threat to human work. Don’t be careless,
                    continue to increase creativity so that we are not easily
                    dafeated by Al. This artwork is symbolic to fight it. Get it
                    Now!!
                  </p>
                </div>

                <p class="letter-spacing text-[18px] font-bold text-white lg:text-[22px]">
                  Produced on Media
                </p>
                <p class="letter-spacing text-[16px] font-semibold text-subtitle lg:text-[20px]">
                  DTF ON CANVAS
                </p>
                <p class="letter-spacing text-[16px] font-semibold text-subtitle lg:text-[20px]">
                  In Frame 50cm x 50cm
                </p>

                <div class="mt-3 flex w-fit flex-row gap-6 rounded-md bg-[#FF8520] px-6 py-3 lg:mt-10">
                  <div class="flex flex-col items-center">
                    <p class="font-semibold text-white">Availability</p>
                    <p class="text-[20px] font-bold text-white lg:text-[24px]">
                      20
                    </p>
                  </div>

                  <div class="w-[1px] bg-white bg-opacity-60"></div>

                  <div class="flex flex-col items-center">
                    <p class="font-semibold text-white">Only Produced</p>
                    <p class="text-[20px] font-bold text-white lg:text-[24px]">
                      20
                    </p>
                  </div>

                  <div class="w-[1px] bg-white bg-opacity-60"></div>

                  <div class="flex flex-col items-center">
                    <p class="font-semibold text-white">Aricle Series</p>
                    <p class="text-[14px] font-bold text-white lg:text-[18px]">
                      Vol 1
                    </p>
                    <p class="text-[8px] font-semibold text-white lg:text-[12px]">
                      Zgaphy Machine
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <div className="group relative block overflow-hidden rounded-t-lg">
                  <Image
                    src={"/images/ilustration-artwork.png"}
                    // alt={title}
                    width={400}
                    height={400}
                    unoptimized
                    // onError={() => setIsError(true)}
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      // onClick={onViewDetails}
                      className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-x-10 px-6 md:mt-2 lg:mt-5">
                  <p className="text-[26px] font-extrabold text-green-500 lg:text-[30px]">
                    $37.55
                  </p>

                  <Button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-x-3 rounded-lg bg-orange-500 px-4 py-2 text-center text-lg font-semibold text-white hover:bg-orange-500/80 focus:outline-none focus:ring-4 focus:ring-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500 lg:px-5 lg:py-3 lg:text-lg"
                  >
                    Add to cart
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_678_587)">
                        <path
                          d="M16.5 16.5C15.39 16.5 14.5 17.39 14.5 18.5C14.5 19.0304 14.7107 19.5391 15.0858 19.9142C15.4609 20.2893 15.9696 20.5 16.5 20.5C17.0304 20.5 17.5391 20.2893 17.9142 19.9142C18.2893 19.5391 18.5 19.0304 18.5 18.5C18.5 17.9696 18.2893 17.4609 17.9142 17.0858C17.5391 16.7107 17.0304 16.5 16.5 16.5ZM0.5 0.5V2.5H2.5L6.1 10.09L4.74 12.54C4.59 12.82 4.5 13.15 4.5 13.5C4.5 14.0304 4.71071 14.5391 5.08579 14.9142C5.46086 15.2893 5.96957 15.5 6.5 15.5H18.5V13.5H6.92C6.8537 13.5 6.79011 13.4737 6.74322 13.4268C6.69634 13.3799 6.67 13.3163 6.67 13.25C6.67 13.2 6.68 13.16 6.7 13.13L7.6 11.5H15.05C15.8 11.5 16.46 11.08 16.8 10.47L20.38 4C20.45 3.84 20.5 3.67 20.5 3.5C20.5 3.23478 20.3946 2.98043 20.2071 2.79289C20.0196 2.60536 19.7652 2.5 19.5 2.5H4.71L3.77 0.5M6.5 16.5C5.39 16.5 4.5 17.39 4.5 18.5C4.5 19.0304 4.71071 19.5391 5.08579 19.9142C5.46086 20.2893 5.96957 20.5 6.5 20.5C7.03043 20.5 7.53914 20.2893 7.91421 19.9142C8.28929 19.5391 8.5 19.0304 8.5 18.5C8.5 17.9696 8.28929 17.4609 7.91421 17.0858C7.53914 16.7107 7.03043 16.5 6.5 16.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_678_587">
                          <rect
                            width="20"
                            height="21"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detail;
