import React from "react";

const Logo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dark Green Bag */}
      <rect
        x="40"
        y="30"
        width="100"
        height="130"
        fill="#033"
        stroke="#064"
        strokeWidth="5"
      />
      <path
        d="M60 30 Q90 -20 120 30"
        stroke="#064"
        strokeWidth="5"
        fill="none"
      />

      {/* Yellow Bag */}
      <rect
        x="80"
        y="90"
        width="100"
        height="80"
        fill="#FFC107"
        stroke="#033"
        strokeWidth="5"
      />
      <path
        d="M100 90 Q130 60 160 90"
        stroke="#033"
        strokeWidth="5"
        fill="none"
      />
      <circle cx="100" cy="90" r="5" fill="#033" />
      <circle cx="160" cy="90" r="5" fill="#FFF" />
    </svg>
  );
};

export default Logo;
