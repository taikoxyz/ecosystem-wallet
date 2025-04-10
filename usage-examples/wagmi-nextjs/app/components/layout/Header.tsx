"use client";

import { RapidFireLogo } from "../ui/rapid-fire-logo";

export function Header() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-3xl font-mono flex items-center gap-2">
        <RapidFireLogo className="w-8 h-8 md:w-10 md:h-10 text-primary" /> 
        <a 
          href="https://www.npmjs.com/package/@rapidfire/id" 
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
            <span className="text-primary group-hover:underline relative">
            <span className="group-hover:hidden">Rapidfire ID example</span>
            <span className="hidden group-hover:inline">@rapidfire/id on NPM</span>
            </span>
        </a>
      </h1>
      <p className="text-primary-foreground font-medium text-sm md:text-base">
        {`Rapidfire ID is a demo wallet created with the `}
        <a key={'openfort-documentation'} href={'https://www.openfort.xyz/docs/guides/ecosystem'} 
          target="_blank" 
          className="underline"
          rel="noopener noreferrer"
        >
            Ecosystem SDK.
        </a>
        <br/>
        {`It's a powerful cross-app wallet with simple UX.`}
      </p>
    </div>
  );
}