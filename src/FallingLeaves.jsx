import React from "react";
import "./FallingLeaves.css";

const NUM_LEAVES = 150;

function FallingLeaves() {
  return (
    <div
      className="falling-leaves"
      style={{
        position: "fixed",
        width: "100%",
        height: "150vh",
        top: "-100px",
        left: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: NUM_LEAVES }).map((_, i) => {
        const size = 20 + Math.random() * 30; // 20-50px 大小
        const baseOpacity = 0.3 + Math.random() * 0.7; // 0.3-1.0 基礎透明度
        const fallDuration = 8 + Math.random() * 6; // 8-14秒
        const swayDuration = 2 + Math.random() * 2; // 2-4秒
        const delay = Math.random() * fallDuration; // 延遲時間分散在整個動畫週期內

        return (
          <img
            key={i}
            src="/A_Maple_Icon_Like_MapleStory,May_2022.png"
            alt="maple leaf"
            className="leaf"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: baseOpacity,
              animationDuration: `${fallDuration}s, ${swayDuration}s`,
              animationDelay: `${delay}s, ${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
    </div>
  );
}

export default FallingLeaves;
