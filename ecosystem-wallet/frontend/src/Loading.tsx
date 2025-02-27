import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;