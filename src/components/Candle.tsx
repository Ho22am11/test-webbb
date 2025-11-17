import { useState } from "react";
import { cn } from "@/lib/utils";

interface CandleProps {
  onBlowOut?: () => void;
}

export const Candle = ({ onBlowOut }: CandleProps) => {
  const [isLit, setIsLit] = useState(true);
  const [showSmoke, setShowSmoke] = useState(false);

  const handleClick = () => {
    if (isLit) {
      setIsLit(false);
      setShowSmoke(true);
      onBlowOut?.();
      
      setTimeout(() => {
        setShowSmoke(false);
      }, 2000);
    }
  };

  return (
    <div 
      className="relative cursor-pointer select-none transition-transform hover:scale-105"
      onClick={handleClick}
    >
      {/* Smoke effect */}
      {showSmoke && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 smoke">
          <div className="text-4xl opacity-50">💨</div>
        </div>
      )}
      
      {/* Flame */}
      <div className={cn(
        "absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-500",
        isLit ? "opacity-100 scale-100" : "opacity-0 scale-0"
      )}>
        <div className={cn(
          "text-4xl",
          isLit && "candle-flame candle-lit"
        )}>
          🔥
        </div>
      </div>
      
      {/* Candle body */}
      <div className={cn(
        "relative w-16 h-32 rounded-t-lg transition-all duration-500",
        isLit ? "bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500" : "bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800",
        "shadow-lg"
      )}>
        {/* Wax drips */}
        <div className="absolute top-0 left-1 w-1 h-8 bg-yellow-300/50 rounded-full blur-sm" />
        <div className="absolute top-2 right-2 w-1 h-6 bg-yellow-300/40 rounded-full blur-sm" />
        
        {/* Candle wick */}
        <div className={cn(
          "absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-3 rounded-full transition-colors duration-500",
          isLit ? "bg-gray-800" : "bg-gray-900"
        )} />
      </div>
    </div>
  );
};
