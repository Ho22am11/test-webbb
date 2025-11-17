import { useState, useEffect } from "react";
import { Candle } from "@/components/Candle";
import { cn } from "@/lib/utils";

const Index = () => {
  const [blownCandles, setBlownCandles] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const totalCandles = 5;

  useEffect(() => {
    if (blownCandles === totalCandles) {
      setShowMessage(true);
    }
  }, [blownCandles]);

  const handleCandleBlowOut = () => {
    setBlownCandles((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center p-8 overflow-hidden relative" dir="rtl">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            {['💖', '✨', '🌟', '💝', '🎂'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        {/* Title */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary text-glow">
            عيد ميلاد سعيد 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            إلى أغلى إنسانة في الكون 💖
          </p>
        </div>

        {/* Candles section */}
        <div className="bg-card/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-border/20">
          <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
            {blownCandles === 0 && "إضغطي على الشموع لتطفئيها 🕯️"}
            {blownCandles > 0 && blownCandles < totalCandles && `رائع! إطفئي الباقي (${totalCandles - blownCandles} متبقي) ✨`}
            {blownCandles === totalCandles && "أتمنى لك عامًا مليئًا بالسعادة والحب 💕"}
          </p>

          {/* Candles container */}
          <div className="flex justify-center items-end gap-8 md:gap-12 mb-8">
            {[...Array(totalCandles)].map((_, index) => (
              <div key={index} className="transition-all duration-300 hover:-translate-y-2">
                <Candle onBlowOut={handleCandleBlowOut} />
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-primary transition-all duration-700 ease-out"
              style={{ width: `${(blownCandles / totalCandles) * 100}%` }}
            />
          </div>
        </div>

        {/* Birthday message */}
        <div
          className={cn(
            "bg-gradient-romantic rounded-3xl p-8 md:p-12 shadow-glow-romantic transition-all duration-1000",
            showMessage ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div className="space-y-6 text-white">
            <p className="text-2xl md:text-3xl font-bold">
              كل سنة وأنتِ بألف خير يا أجمل هدية من الله 🌹
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              أتمنى أن يكون هذا العام مليئًا بالفرح والنجاح والأحلام المحققة.
              أنتِ تستحقين كل السعادة في العالم 💝
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              بحبك كتير كتير 💕✨
            </p>
          </div>
        </div>

        {/* Fun facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { emoji: "🎂", text: "عام جديد من العمر" },
            { emoji: "🌟", text: "365 يوم من الفرص" },
            { emoji: "💖", text: "حب لا نهائي" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <p className="text-lg text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
