"use client";
import React from "react";
import { assets, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {
  const { isSeller, router, getCartCount } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && (
          <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />

        {/* Cart Icon */}
        <button
          onClick={() => router.push("/cart")}
          className="relative flex items-center gap-2 hover:text-gray-900 transition"
        >
          <CartIcon />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>

        {/* Account Link */}
        <div className="flex items-center gap-2">
          <Link href="/account" className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </Link>
        </div>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {/* Mobile Cart */}
        <button
          onClick={() => router.push("/cart")}
          className="relative flex items-center gap-2 hover:text-gray-900 transition"
        >
          <CartIcon />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>

        {isSeller && (
          <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}

        {/* Mobile Account Link */}
        <Link href="/account" className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </Link>
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;