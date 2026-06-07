"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export function LottieWave() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/270393a9-ec2c-4209-8604-f6baff64349c/aupFFvTBnC.json",
    )
      .then((response) => response.json())
      .then(setAnimationData)
      .catch(() => setAnimationData(null));
  }, []);

  if (!animationData) {
    return <div className="h-11 w-11" aria-hidden />;
  }

  return (
    <Lottie
      animationData={animationData}
      loop
      className="h-11 w-11"
      aria-hidden
    />
  );
}
