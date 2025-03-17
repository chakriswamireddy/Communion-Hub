import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ReactConfettiComp = () => {
  const { width, height } = useWindowSize();
  const [confettiPieces, setConfettiPieces] = useState(0);

  useEffect(() => {
    // Trigger burst
    setConfettiPieces(300);
    setTimeout(() => setConfettiPieces(0), 2000); // Stop after 2 seconds
  }, []);

  return (
    <>
      {/* Left Side Confetti */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={confettiPieces}
        confettiSource={{ x: 0, y: height / 2, width: 10, height: height }} // Left side
        initialVelocityX={25} // Push right
        initialVelocityY={Math.random() * 5 - 2.5} // Slight random vertical movement
        gravity={0.05} // Light downward drift
      />

      {/* Right Side Confetti */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={confettiPieces}
        confettiSource={{ x: width, y: height / 2, width: 10, height: height }} // Right side
        initialVelocityX={-25} // Push left
        initialVelocityY={Math.random() * 5 - 2.5} // Slight random vertical movement
        gravity={0.05} // Light downward drift
      />
    </>
  );
};

export default ReactConfettiComp;
