import React, { useEffect, useRef } from "react";

const MatrixRain = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const columnsRef = useRef(0);
  const dropsRef = useRef([]);

  const letters = "01";
  const fontSize = 14;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = canvas.offsetHeight;
      if (widthRef.current !== newWidth || heightRef.current !== newHeight) {
        widthRef.current = newWidth;
        heightRef.current = newHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;
        columnsRef.current = Math.floor(newWidth / fontSize);
        dropsRef.current = Array(columnsRef.current).fill(1);
      }
    };

    const draw = () => {
      resizeCanvas();

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, widthRef.current, heightRef.current);
      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < dropsRef.current.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);
        if (dropsRef.current[i] * fontSize > heightRef.current && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i]++;
      }
    };

    resizeCanvas();
    const interval = setInterval(draw, 90);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default MatrixRain;