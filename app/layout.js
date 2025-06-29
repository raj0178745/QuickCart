import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Forever - Fashion for Every Moment",
  description:
    "E-Commerce Fashion Store with Next.js - Your Style, Your Forever",
};

function ConditionalClerkProvider({ children }) {
  // Only use ClerkProvider if keys are configured
  if (
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.CLERK_SECRET_KEY
  ) {
    try {
      const { ClerkProvider } = require("@clerk/nextjs");
      return <ClerkProvider>{children}</ClerkProvider>;
    } catch (error) {
      console.log("Clerk not available");
      return children;
    }
  }
  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-gray-700 bg-white min-h-screen`}
        style={{ backgroundColor: "#ffffff", color: "#374151" }}
      >
        <Toaster />
        <ConditionalClerkProvider>
          <AppContextProvider>{children}</AppContextProvider>
        </ConditionalClerkProvider>
      </body>
    </html>
  );
}
