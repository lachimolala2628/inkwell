'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingOverlay = () => {
    return (
        <div className="loading-wrapper">
            <div className="loading-shadow-wrapper bg-[#1A1A1A] shadow-soft-lg">
                <div className="loading-shadow">
                    <Loader2 className="loading-animation w-12 h-12 text-[#D4D4D4]" />
                    <h2 className="loading-title">Synthesizing Your Book</h2>
                    <p className="text-[#A1A1A1] text-center max-w-xs">
                        Please wait while we process your PDF and prepare your interactive literary experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;