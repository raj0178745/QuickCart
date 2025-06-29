import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 },
      );
    }

    return NextResponse.json({
      success: true,
      userId,
      message: "User authenticated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Authentication error: " + error.message,
      },
      { status: 500 },
    );
  }
}
