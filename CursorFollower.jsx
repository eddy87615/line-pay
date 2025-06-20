import { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // 添加滑鼠移動監聽器
    document.addEventListener('mousemove', handleMouseMove);

    // 清理監聽器
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        width: '50px', // 調整 GIF 大小
        height: '50px',
        pointerEvents: 'none', // 讓滑鼠事件穿透，不影響其他元素的點擊
        zIndex: 9999, // 確保在最上層
        transform: 'translate(-50%, -50%)', // 讓 GIF 以滑鼠為中心
        transition: 'all 0.1s ease-out', // 添加平滑動畫效果
      }}
    >
      <img
        src="FCOFkla.gif" // 使用你現有的 GIF
        alt="cursor follower"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default CursorFollower;
