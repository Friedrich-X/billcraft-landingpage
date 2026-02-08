import React from "react";

interface BillCraftSymbolProps {
  className?: string;
  width?: number;
  height?: number;
}

const BillCraftSymbol: React.FC<BillCraftSymbolProps> = ({ 
  className = "", 
  width = 60, 
  height = 34 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 512 291" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BillCraft Symbol"
    >
      <path d="M497.383 0C510.382 0 516.889 15.7242 507.694 24.9157L322.18 210.354C316.71 215.823 309.292 218.894 301.558 218.894H190.856C174.743 218.894 161.681 231.961 161.681 248.08V276.407C161.681 284.467 155.15 291 147.093 291H92.6991C84.9613 291 77.5404 287.925 72.069 282.452L8.54529 218.905C3.07382 213.432 0 206.008 0 198.268V73.6078C0 60.6069 15.713 54.096 24.9028 63.289L140.539 178.966C151.933 190.364 170.406 190.364 181.799 178.966L352.157 8.54831C357.628 3.07491 365.049 0 372.787 0H497.383Z" fill="currentColor"/>
    </svg>
  );
};

export default BillCraftSymbol;
