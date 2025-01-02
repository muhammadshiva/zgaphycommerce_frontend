"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Title from "@/components/atomics/title";

function Checkout() {
  const router = useRouter();
  const query = new URLSearchParams(window.location.search);
  const data = query.get("data")
    ? JSON.parse(decodeURIComponent(query.get("data")))
    : {};

  console.log("🚀 ~ Checkout Data:", data);

  const { image, title, price } = data;

  const url = `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`;

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
      `Artwork: ${title}\n` +
      `Price: Rp. ${Number(price).toLocaleString()}\n` +
      `URL: ${url}\n` +
      `---------------------------\n` +
      `Thank You!`;

    const whatsappURL = `https://wa.me/6281322928085?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-[#0D0E25] min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full flex flex-row items-center gap-x-8 pt-20">
        {/* Form Input */}
        <div className="flex flex-col  p-8 rounded-lg shadow-lg w-1/2">
          <Title
            title={"Delivery Details"}
            subtitle={"Enter your delivery details here"}
            section="white-left"
          />

          <label className="block text-white text-lg pt-5">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama"
            className="w-full mt-2 p-3 border rounded-lg text-gray-700"
          />

          <label className="block text-white mt-6 text-lg">No. Hp</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Masukkan Nomor HP"
            className="w-full mt-2 p-3 border rounded-lg text-gray-700"
          />

          <label className="block text-white mt-6 text-lg">Alamat</label>
          <textarea
            rows={6}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Masukkan Alamat Lengkap"
            className="w-full mt-2 p-3 border rounded-lg text-gray-700"
          />

          <button
            type="button"
            onClick={sendWhatsAppMessage}
            className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg text-lg"
          >
            Kirim ke WhatsApp
          </button>
        </div>

        <div className="flex flex-col items-center pt-12 gap-y-2 rounded-lg shadow-lg w-1/2">
          <Image
            src={url}
            alt="artwork"
            height={500}
            width={500}
            className="rounded-lg object-contain"
            unoptimized
          />
          <p className="text-white text-lg font-semibold">{title || "-"}</p>
          <p className="text-green-500 text-xl font-bold">
            Rp. {Number(price || 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// "use client";
// import Title from "@/components/atomics/title";
// import Image from "next/image";
// import { useState } from "react";

// function Checkout({
//   image,
//   title,
//   price,
//   slug,
// }: {
//   image: string;
//   title: string;
//   price: number;
//   slug: string;
// }) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const url = `${process.env.NEXT_PUBLIC_STORAGE_BASE_URL}/${image}`;

//   // Function to send WhatsApp message
//   const sendWhatsAppMessage = () => {
//     const message =
//       `Hi, Zgaphy, aku mau pesen ya\n` +
//       `---------------------------\n` +
//       `Nama: ${name}\n` +
//       `No. Hp: ${phone}\n` +
//       `Alamat Lengkap: ${address}\n\n` +
//       `Artwork: ${title}\n` +
//       `Price: Rp. ${price.toLocaleString()}\n` +
//       `URL: ${url}\n` +
//       `---------------------------\n` +
//       `Thank You!`;

//     const whatsappURL = `https://wa.me/6281322928085?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="bg-[#0D0E25] min-h-screen flex items-center justify-center">
//       <div className="max-w-screen-lg w-full flex flex-row items-center gap-x-8 pt-20">
//         {/* Form Input */}
//         <div className="flex flex-col  p-8 rounded-lg shadow-lg w-1/2">
//           <Title
//             title={"Delivery Details"}
//             subtitle={"Enter your delivery details here"}
//             section="white-left"
//           />

//           {/* Input Nama */}
//           <label className="block text-white text-lg pt-5">Nama</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Masukkan Nama"
//             className="w-full mt-2 p-3 border rounded-lg text-gray-700"
//           />

//           {/* Input Nomor HP */}
//           <label className="block text-white mt-6 text-lg">No. Hp</label>
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Masukkan Nomor HP"
//             className="w-full mt-2 p-3 border rounded-lg text-gray-700"
//           />

//           {/* Input Alamat */}
//           <label className="block text-white mt-6 text-lg">Alamat</label>
//           <textarea
//             type="text"
//             rows={6}
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Masukkan Alamat Lengkap"
//             className="w-full mt-2 p-3 border rounded-lg text-gray-700"
//           />

//           {/* Tombol Kirim */}
//           <button
//             type="button"
//             onClick={sendWhatsAppMessage}
//             className="mt-6 bg-green-500 text-white py-3 px-6 rounded-lg text-lg"
//           >
//             Kirim ke WhatsApp
//           </button>
//         </div>

//         {/* Gambar Artwork */}
//         <div className="flex flex-col items-center p-8 gap-y-2 rounded-lg shadow-lg w-1/2">
//           <Image
//             src={image || "/images/ilustration-artwork.png"}
//             alt="artwork"
//             height={500}
//             width={500}
//             className="rounded-lg object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
