"use client";
import { SignUp } from "@clerk/nextjs";

const SignUpComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-orange-600 hover:bg-orange-700",
              card: "shadow-lg",
              headerTitle: "text-gray-800",
              headerSubtitle: "text-gray-600",
            },
          }}
          routing="hash"
          signInUrl="/login"
          redirectUrl="/"
        />
      </div>
    </div>
  );
};

export default SignUpComponent;
