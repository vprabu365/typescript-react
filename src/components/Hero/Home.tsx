import React, { useEffect, useRef } from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  let t = 0;

  const col = (ctx, x, y, r, g, b) => {
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, y, 1, 1);
  };

  const getColor = (x, y, t) => ({
    r: Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)),
    g: Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    ),
    b: Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    ),
  });

  const run = () => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    for (let x = 0; x <= 25; x++) {
      for (let y = 0; y <= 25; y++) {
        const { r, g, b } = getColor(x, y, t);
        col(ctx, x, y, r, g, b);
      }
    }

    t += 0.01;
    requestAnimationFrame(run);
  };

  const handleClick = () => {
    navigate("/shop");
  };
  useEffect(() => {
    run();
  }, []);

  return (
    <div className="hero-section">
      <h1 className="header">Ready to get excited?</h1>
      <button onClick={handleClick}>Start shopping</button>
      <p className="heroimg">Click here to explore our products</p>
      <canvas id="canv" ref={canvasRef} width="25" height="25" />
    </div>
  );
};

export default Home;
