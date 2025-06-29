"use client";
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(true);
  const [cartItems, setCartItems] = useState({});

  const fetchProductData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        // Fallback to dummy data
        setProducts(productsDummyData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to dummy data
      setProducts(productsDummyData);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/auth");
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setUserData({ userId: data.userId });
        } else {
          setUserData(false);
        }
      } else {
        // If auth fails (e.g., Clerk not configured), just set to false
        setUserData(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData(false);
    }
  };

  const addToCart = async (itemId) => {
    try {
      // Update local state first for immediate UI feedback
      let cartData = structuredClone(cartItems);
      if (cartData[itemId]) {
        cartData[itemId] += 1;
      } else {
        cartData[itemId] = 1;
      }
      setCartItems(cartData);

      // Also sync with API in real implementation
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: itemId,
          quantity: cartData[itemId],
        }),
      });

      if (!response.ok) {
        console.error("Failed to sync cart with server");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateCartQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        totalCount += cartItems[items];
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = {
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
