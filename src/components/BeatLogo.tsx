import React from 'react';

interface BeatLogoProps {
  variant?: 'icon' | 'stacked';
  className?: string;
}

export const BeatLogo: React.FC<BeatLogoProps> = ({
  variant = 'icon',
  className = ''
}) => {
  // Variant: Icon (square badge)
  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white border border-[#E5E5DF] rounded-none overflow-hidden select-none ${className}`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* BEAT in vibrant energetic orange */}
          <text
            x="50%"
            y="46"
            textAnchor="middle"
            fill="#F15A24"
            fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="32"
            letterSpacing="-1"
          >
            BEAT
          </text>
          {/* PASS in deep charcoal black */}
          <text
            x="50%"
            y="76"
            textAnchor="middle"
            fill="#262626"
            fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="32"
            letterSpacing="-1"
          >
            PASS
          </text>
        </svg>
      </div>
    );
  }

  // Variant: Stacked (BEAT over PASS)
  return (
    <div className={`inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 240 180"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* BEAT */}
        <text
          x="50%"
          y="82"
          textAnchor="middle"
          fill="#F15A24"
          fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="78"
          letterSpacing="-3"
        >
          BEAT
        </text>
        {/* PASS */}
        <text
          x="50%"
          y="152"
          textAnchor="middle"
          fill="#262626"
          fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="78"
          letterSpacing="-3"
        >
          PASS
        </text>
      </svg>
    </div>
  );
};
