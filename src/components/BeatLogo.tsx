import React from 'react';

interface BeatLogoProps {
  variant?: 'icon' | 'stacked' | 'horizontal' | 'badge';
  className?: string;
  size?: number;
}

export const BeatLogo: React.FC<BeatLogoProps> = ({
  variant = 'icon',
  className = '',
  size
}) => {
  // Variant: Icon (Square badge like the user's uploaded icon box, but now with official BEAT PASS typography)
  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white border border-[#E5E5DF] rounded-none overflow-hidden select-none ${className}`}
        style={size ? { width: size, height: size } : undefined}
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

  // Variant: Stacked (Matches the uploaded "Energetic BEAT PASS Logo with Tangerine.png" perfectly)
  if (variant === 'stacked') {
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
  }

  // Variant: Horizontal (BEAT in orange, PASS in dark charcoal)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <svg
          viewBox="0 0 280 60"
          className="w-auto h-full max-h-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="46"
            fill="#F15A24"
            fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="46"
            letterSpacing="-2"
          >
            BEAT
          </text>
          <text
            x="142"
            y="46"
            fill="#262626"
            fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="46"
            letterSpacing="-2"
          >
            PASS
          </text>
        </svg>
      </div>
    );
  }

  // Variant: Badge (White square framed badge with the official logo)
  return (
    <div className={`bg-white border border-[#E5E5DF] p-2 inline-flex items-center justify-center shadow-xs ${className}`}>
      <BeatLogo variant="stacked" className="w-full h-full" />
    </div>
  );
};
