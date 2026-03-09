import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Spin.css"; // Ensure you import the CSS file

function Spin() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // Wheel ke 8 hisse (segments) jaisa photo me hai
  const segments = [
    { text: "₹50\nWallet\nCash", icon: false },
    { text: "1000\nCoins", icon: true },
    { text: "₹5\nWallet\nCash", icon: true },
    { text: "Better\nLuck\nNext Time", icon: false },
    { text: "₹50\nCoins", icon: false },
    { text: "Better\nLuck\nNext Time", icon: false },
    { text: "₹5\nWallet\nCash", icon: true },
    { text: "1000\nCoins", icon: true },
  ];

  const spinWheel = () => {
    if (isSpinning) return; // Agar already ghum raha hai to click ignore karo

    setIsSpinning(true);

    // Random rotation calculate karo (Kam se kam 5 chakkar + extra random angle)
    const extraSpins = 5 * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    const newRotation = rotation + extraSpins + randomAngle;

    setRotation(newRotation);

    // 4 second baad button dubara enable kar do (kyunki CSS transition 4s ka hai)
    setTimeout(() => {
      setIsSpinning(false);
      // Optional: Yaha par aap alert dikha sakte ho ki user kya jeeta hai
      // calculateWinner(newRotation);
    }, 4000);
  };

  return (
    <div className="reward-container">
      {/* Back Button */}
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10"
      >
        <ArrowLeft size={26} color="white" />
      </button>
      <h1 className="title">Spin & Win</h1>

      <div className="wheel-wrapper">
        {/* Upar ka Golden Teer (Pointer) */}
        <div className="pointer"></div>

        <div className="wheel-border">
          <div
            className="wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {/* Wheel ke beech ki lines */}
            {segments.map((_, index) => (
              <div
                key={`line-${index}`}
                className="line"
                style={{ transform: `rotate(${index * 45 + 22.5}deg)` }}
              ></div>
            ))}

            {/* Wheel ka text aur icons */}
            {segments.map((segment, index) => (
              <div
                key={`slice-${index}`}
                className="slice"
                style={{ transform: `rotate(${index * 45}deg)` }}
              >
                {segment.icon && <div className="coin-icon"></div>}
                <div className="slice-text">
                  {segment.text.split("\n").map((line, i) => (
                    <span key={i} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beech ka static Play Button */}
        <div
          className="center-circle"
          onClick={spinWheel}
          style={{ cursor: "pointer" }}
        >
          <div className="play-triangle"></div>
        </div>
      </div>

      <button className="spin-btn" onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin Now"}
      </button>
    </div>
  );
}

export default Spin;
