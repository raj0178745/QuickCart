"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import Image from "next/image";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const { isSignedIn, user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      toast.error("Please sign in to add products");
      return;
    }

    if (!name || !description || !price || !offerPrice) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (parseFloat(offerPrice) > parseFloat(price)) {
      toast.error("Offer price cannot be higher than original price");
      return;
    }

    setLoading(true);

    try {
      // For demo purposes, we'll use placeholder images
      const imageUrls =
        files.length > 0
          ? files
              .filter((file) => file)
              .map((file) => URL.createObjectURL(file))
          : [
              "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
            ];

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          offerPrice,
          category,
          images: imageUrls,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Product added successfully!");
        // Reset form
        setName("");
        setDescription("");
        setPrice("");
        setOfferPrice("");
        setFiles([]);
        setCategory("Men");
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred while adding the product");
    } finally {
      setLoading(false);
    }
  };

  if (!isSignedIn) {
    return (
      <div className="flex-1 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Authentication Required
          </h2>
          <p className="text-gray-600">
            Please sign in to access the seller dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">
          Add New Product
        </h1>

        <div>
          <p className="text-base font-medium">Product Images</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                  type="file"
                  id={`image${index}`}
                  accept="image/*"
                  hidden
                />
                <Image
                  key={index}
                  className="max-w-24 cursor-pointer border border-gray-300 rounded"
                  src={
                    files[index]
                      ? URL.createObjectURL(files[index])
                      : assets.upload_area
                  }
                  alt=""
                  width={100}
                  height={100}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name *
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter product name"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 focus:border-orange-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description *
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none focus:border-orange-500"
            placeholder="Enter product description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 focus:border-orange-500"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Dresses">Dresses</option>
              <option value="Tops">Tops</option>
              <option value="Shoes">Shoes</option>
              <option value="Outerwear">Outerwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Original Price *
            </label>
            <input
              id="product-price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 focus:border-orange-500"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price *
            </label>
            <input
              id="offer-price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 focus:border-orange-500"
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Adding Product..." : "ADD PRODUCT"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
