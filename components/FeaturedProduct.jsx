import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    title: "Summer Collection",
    description: "Discover vibrant dresses perfect for every summer occasion.",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/32717996/pexels-photo-32717996.jpeg",
    title: "Casual Comfort",
    description: "Premium quality basics that blend style with comfort.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/32753087/pexels-photo-32753087.jpeg",
    title: "Denim Essentials",
    description: "Timeless denim pieces for your everyday wardrobe.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-pink-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover rounded-lg"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-pink-600 px-4 py-2 rounded">
                Shop now{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
