import { NextResponse } from "next/server";
import { productsDummyData } from "@/assets/assets";

// GET all products
export async function GET(request) {
  try {
    return NextResponse.json({
      success: true,
      products: productsDummyData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching products: " + error.message,
      },
      { status: 500 },
    );
  }
}

// POST new product (for sellers)
export async function POST(request) {
  try {
    if (!process.env.CLERK_SECRET_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication not configured",
        },
        { status: 503 },
      );
    }

    const { auth } = await import("@clerk/nextjs/server");
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User not authenticated",
        },
        { status: 401 },
      );
    }

    const body = await request.json();
    const { name, description, price, offerPrice, category, images } = body;

    // Validate required fields
    if (!name || !description || !price || !offerPrice || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      );
    }

    // Create new product object
    const newProduct = {
      _id: `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      name,
      description,
      price: parseFloat(price),
      offerPrice: parseFloat(offerPrice),
      image: images || [
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
      ],
      category,
      date: Date.now(),
      __v: 0,
    };

    // In a real app, save to database
    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error adding product: " + error.message,
      },
      { status: 500 },
    );
  }
}
