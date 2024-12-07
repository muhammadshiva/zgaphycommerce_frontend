"use client";
import { useState } from "react";
function Checkout() {
  const [product, setProduct] = useState("Produk A");
  const [price, setPrice] = useState(100000);
  const [contact, setContact] = useState("81322928085");
  const [address, setAddress] = useState("Jl. Contoh No. 123");

  const sendWhatsAppMessage = () => {
    const message =
      `Halo, saya ingin memesan:\n\n` +
      `*Produk*: ${product}\n` +
      `*Harga*: Rp${price.toLocaleString()}\n` +
      `*Kontak*: ${contact}\n` +
      `*Alamat Pengiriman*: ${address}\n\n` +
      `Terima kasih!`;

    const whatsappURL = `https://wa.me/62${contact}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <h1>Pesan Produk</h1>
      <button onClick={sendWhatsAppMessage}>Pesan via WhatsApp</button>
    </div>
  );
}

export default Checkout;

// import { Form } from "@/components/atomics/form";

// function Checkout() {
//   return (
//     <div className="bg-[#0D0E25] flex items-center justify-center h-screen w-screen">
//       <div className="flex flex-col">
//         <p className="text-white">Checkout</p>
//         <div className="flex flex-row items-center justify-between gap-x-6">
//           <div className="flex flex-col bg-white p-6 rounded-lg">
//             <p>Test</p>
//             <p>Test 2</p>
//           </div>
//           <p className="text-white">Cart Items</p>
//         </div>
//       </div>
//     </div>
//     // <main className="bg-[#0D0E25] flex items-center">
//     //   <div className="h-screen max-w-screen-xl mx-auto flex flex-col justify-start">
//     //     <p className="text-white">Checkout</p>
//     //     <div className="flex flex-row max-w-screen-xl mx-auto p-8 rounded-xl justify-around items-center">
//     //       <div className="w-[500px] h-[500px] bg-white ">
//     //         <p>Address Section</p>
//     //       </div>
//     //       <div className="w-[500px] h-[500px] bg-white">
//     //         <p>Address Section</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </main>
//   );
// }

// export default Checkout;
