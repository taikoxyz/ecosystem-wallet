"use client";

import { RapidFireLogo } from "../ui/rapid-fire-logo";

export function Header() {
  return (
    <div className="text-center space-y-4 mb-8 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-mono flex items-center justify-center gap-2">
        <RapidFireLogo className="w-8 h-8 md:w-10 md:h-10 text-orange-500" /> 
        <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
          rapid fire
        </span>
      </h1>
      <p className="text-gray-400 text-sm md:text-base px-4">
        Get started by editing <code className="text-gray-300">src/app/page.tsx</code>
      </p>
    </div>
  );
}