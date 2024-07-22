import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import WordPullUp from "./ui/word-pull-up";

export function FooterCard() {
  return (
    <div className="flex  flex-col items-start min-w-full mx-auto relative h-[18rem]">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl">
          <WordPullUp
            className="bg-clip-text text-white/80 drop-shadow-2xl"
            words="Agile, Creative and Innovative"
          />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
