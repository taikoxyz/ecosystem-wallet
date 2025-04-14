"use client";

export function Header() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-3xl font-mono flex items-center gap-2">
        <a 
          href="https://www.npmjs.com/package/@rapidfire/id" 
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span>Demo</span>
        </a>
      </h1>
      <p className="text-muted-foreground font-medium text-sm md:text-base">
        {`Rapidfire ID is a demo wallet created with Openfort's `}
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