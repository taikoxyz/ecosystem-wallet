import React from 'react';

const Loading: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black flex items-center justify-center z-50" 
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      {/* Using a full custom animation with keyframes for the spinner */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="animate-spin"
      >
        <circle 
          cx="25" 
          cy="25" 
          r="20" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="80"
          strokeDashoffset="60"
        />
      </svg>
      
      {/* Adding custom styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .animate-spin {
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `
        }}
      />
    </div>
  );
};

export default Loading;