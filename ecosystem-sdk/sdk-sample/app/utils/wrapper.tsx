'use client';

export default function AppWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex-container">
        { children }
      </div>
    );
}