"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  waveWidth,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number = 0,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null = null,
    canvas: HTMLCanvasElement | null = null;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
      ctx = canvas.getContext("2d");

    
        if (ctx) {
          w = ctx.canvas.width = window.innerWidth;
          h = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        }
        render();
    }
  };

  const waveColors = ["#7FA086", "#A8D5BA", "#4A4A4A"];

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      if (ctx) { // Ensure ctx is not null
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
        }
        ctx.stroke();
        ctx.closePath();
      }
    }
  };

  let animationId: number;
  const render = () => {
    if (ctx) { // Ensure ctx is not null
      ctx.fillStyle = "white"; // Set the background color to white
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    }
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
  const ctx = canvasRef.current?.getContext("2d");
  if (!ctx) return;

  let animationId: number;
  const init = () => {
    const w = ctx.canvas.width = window.innerWidth;
    const h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    window.onresize = function () {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const render = () => {
    ctx.fillStyle = "white"; // Set the background color to white
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  init();

  return () => {
    cancelAnimationFrame(animationId);
  };
}, [blur, waveOpacity]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
