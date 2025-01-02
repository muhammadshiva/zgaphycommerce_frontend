"use client";
import { Button } from "@/components/atomics/button";
import { useGetDetailArtworkQuery } from "@/services/artwork.service";
import Image from "next/image";
import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

function Detail({ params }: { params: { id: string } }) {
  const { data } = useGetDetailArtworkQuery(params.id);
  const router = useRouter();

  const artwork = data?.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = artwork?.image
    ? `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${artwork.image}`
    : "/placeholder-image.png";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const sendWhatsAppMessage = () => {
    const message =
      `Hi, Zgaphy, aku mau pesen ya\n` +
      `---------------------------\n` +
      `Nama: ${name}\n` +
      `No. Hp: ${phone}\n` +
      `Alamat Lengkap: ${address}\n\n` +
      `Artwork: ${artwork?.title || "Untitle Artwork"}\n` +
      `Price: Rp. ${Number(artwork?.price || 0).toLocaleString()}\n` +
      `URL: ${url}\n` +
      `---------------------------\n` +
      `Thank You!`;

    const whatsappURL = `https://wa.me/6281322928085?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main>
      <section className="bg-[#0D0E25] h-screen w-screen">
        <div className="mx-auto max-w-screen-xl px-24 pt-[200px]">
          <div className="flex flex-col lg:gap-y-20">
            <div className="flex flex-col-reverse justify-between lg:flex-row items-center">
              <div className="mt-2 flex flex-col items-center lg:mt-10">
                <p className="letter-spacing text-[24px] font-extrabold text-white lg:text-[28px] mb-4">
                  {artwork?.title || "-"}
                </p>

                <div className="div mb-5 w-[535px] lg:mb-8">
                  <p className="text-center text-[16px] font-normal lg:text-[20px] text-subtitle">
                    {artwork?.description || "Loading description..."}
                  </p>
                </div>

                <p className="letter-spacing text-[18px] font-bold text-white lg:text-[22px]">
                  Produced on Media
                </p>
                <p className="letter-spacing text-[16px] font-semibold text-subtitle lg:text-[20px]">
                  DTF ON CANVAS
                </p>
                <p className="letter-spacing text-[16px] font-semibold text-subtitle lg:text-[20px]">
                  In Frame {artwork?.frame_width || 0}cm x{" "}
                  {artwork?.frame_height || 0}cm
                </p>

                <div className="mt-3 flex w-fit flex-row gap-6 rounded-md bg-[#FF8520] px-6 py-3 lg:mt-10">
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-white">Availability</p>
                    <p className="text-[20px] font-bold text-white lg:text-[24px]">
                      {artwork?.stock?.available || 0}
                    </p>
                  </div>

                  <div className="w-[1px] bg-white bg-opacity-60"></div>

                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-white">Only Produced</p>
                    <p className="text-[20px] font-bold text-white lg:text-[24px]">
                      {artwork?.stock?.total || 0}
                    </p>
                  </div>

                  <div className="w-[1px] bg-white bg-opacity-60"></div>

                  <div className="flex flex-col items-center w-[120px]">
                    <p className="font-semibold text-white">Aricle Series</p>
                    <p className="text-[14px] font-bold text-white lg:text-[18px]">
                      {artwork?.series || "-"}
                    </p>
                    <p className="text-[8px] text-center font-semibold text-white lg:text-[12px] line-clamp-2 overflow-hidden">
                      {artwork?.category?.title || "-"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-y-1">
                <div className="group relative block overflow-hidden rounded-t-lg">
                  <Image src={url} width={400} height={400} unoptimized />

                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="rounded-md bg-[#FF8520] px-4 py-2 font-bold text-white">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-y-3 px-6 md:mt-2 lg:mt-5">
                  <p className="text-[26px] font-extrabold text-green-500 lg:text-[26px]">
                    {formatPrice(artwork?.price || 0)}
                  </p>

                  <Button
                    onClick={toggleModal}
                    className="bg-green-500 rounded-lg"
                  >
                    <div className="flex flex-row gap-x-2">
                      <Image
                        src="/icons/whatsapp.svg"
                        alt="arrow-left"
                        height={20}
                        width={20}
                      />
                      <span className="font-medium text-sm">
                        Order via WhatsApp
                      </span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Delivery Details
              </h3>

              <label className="block text-gray-700 text-lg">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan Nama"
                className="w-full mt-2 p-3 border rounded-lg text-gray-700"
              />

              <label className="block text-gray-700 mt-6 text-lg">No. Hp</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Masukkan Nomor HP"
                className="w-full mt-2 p-3 border rounded-lg text-gray-700"
              />

              <label className="block text-gray-700 mt-6 text-lg">Alamat</label>
              <textarea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Masukkan Alamat Lengkap"
                className="w-full mt-2 p-3 border rounded-lg text-gray-700"
              />

              <div className="flex justify-end mt-6 gap-4">
                <button
                  onClick={toggleModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={sendWhatsAppMessage}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Detail;
