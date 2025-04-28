"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Image priority={true} src="/images/logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} className="mb-6" />
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md text-center bg-white">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Page Not Found</h1>
        <p className="text-destructive mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <Button
          variant="outline"
          className="mt-4 px-6 py-2 text-sm font-medium"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
