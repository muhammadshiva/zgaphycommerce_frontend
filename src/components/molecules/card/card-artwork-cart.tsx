import Image from "next/image";
import { useState } from "react";

function CardArtworkCart() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          {/* Checkbox */}
          <div
            className={`w-6 h-6 border-2 flex items-center justify-center cursor-pointer rounded ${
              isChecked
                ? "bg-orange-500 border-orange-500"
                : "border-orange-500"
            }`}
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>

          {/* Artwork Details */}
          <div className="flex flex-row ml-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/ilustration-artwork.png"
                alt="language"
                height={50}
                width={50}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col ml-6 gap-y-1">
              <p className="text-md font-bold text-gray-900 truncate dark:text-white">
                FIGHT AGAINTS A.I
              </p>
              <div className="text-sm font-medium text-gray-600 dark:text-white">
                Rp. 500.000
              </div>
            </div>
          </div>
        </div>

        {/* Trash Icon */}
        <Image
          src="/icons/trash.svg"
          alt="language"
          height={15}
          width={15}
          className="cursor-pointer"
        />
      </div>

      <div className="w-full bg-gray-300 h-[1px]" />
    </div>
  );
}

export default CardArtworkCart;
