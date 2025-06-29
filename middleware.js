import { NextResponse } from "next/server";

export function middleware(request) {
  // Only handle specific protected routes when Clerk is configured
  if (
    !process.env.CLERK_SECRET_KEY ||
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  ) {
    // If Clerk is not configured, just pass through
    return NextResponse.next();
  }

  // For now, just pass through all requests to avoid server action errors
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
