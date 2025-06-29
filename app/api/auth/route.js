import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Check if Clerk is configured
    if (
      !process.env.CLERK_SECRET_KEY ||
      !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Authentication not configured - Please add Clerk keys to .env file",
        },
        { status: 503 },
      );
    }

    const { auth } = await import("@clerk/nextjs/server");
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
        message:
          "Authentication service unavailable - Please configure Clerk authentication",
      },
      { status: 503 },
    );
  }
}
