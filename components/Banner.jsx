import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#F8F4F0] my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-56 rounded-lg object-cover"
        src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg"
        alt="winter_coat"
        width={300}
        height={400}
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
          Winter Collection is Here
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          Stay warm and stylish with our premium winter wear collection
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-pink-600 rounded text-white">
          Shop now
          <Image
            className="group-hover:translate-x-1 transition"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80 rounded-lg object-cover"
        src="https://images.pexels.com/photos/32747249/pexels-photo-32747249.jpeg"
        alt="handbag"
        width={400}
        height={600}
      />
      <Image
        className="md:hidden max-w-56 rounded-lg object-cover"
        src="https://images.pexels.com/photos/12626457/pexels-photo-12626457.png"
        alt="summer_blouse"
        width={300}
        height={400}
      />
    </div>
  );
};

export default Banner;
