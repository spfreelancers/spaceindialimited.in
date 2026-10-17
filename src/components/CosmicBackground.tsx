import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starColors = ['#ffffff', '#fef08a', '#f59e0b', '#7dd3fc', '#c084fc'];
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      targetAlpha: number;
      alphaSpeed: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const initStars = () => {
      stars = [];
      const count = Math.min(220, Math.floor((width * height) / 8000));
      for (let i = 0; i < count; i++) {
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          targetAlpha: Math.random() * 0.9 + 0.1,
          alphaSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          color,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);
    initStars();

    let shootingStar = {
      x: 0,
      y: 0,
      length: 120,
      speed: 15,
      angle: Math.PI / 4,
      opacity: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      if (!shootingStar.active && Math.random() < 0.015) {
        shootingStar = {
          x: Math.random() * width * 0.8,
          y: height * 0.4 * Math.random(),
          length: Math.random() * 80 + 100,
          speed: Math.random() * 8 + 14,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          opacity: 1,
          active: true,
        };
      }
    };

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep celestial ambient gradients
      const radial1 = ctx.createRadialGradient(
        width * 0.7,
        height * 0.2,
        50,
        width * 0.7,
        height * 0.2,
        Math.max(width, height) * 0.8
      );
      radial1.addColorStop(0, 'rgba(30, 27, 75, 0.35)');
      radial1.addColorStop(0.5, 'rgba(15, 23, 42, 0.2)');
      radial1.addColorStop(1, 'rgba(3, 6, 18, 0)');
      ctx.fillStyle = radial1;
      ctx.fillRect(0, 0, width, height);

      const radial2 = ctx.createRadialGradient(0, 0, 0, 0, 0, width * 0.5);
      radial2.addColorStop(0, 'rgba(245, 158, 11, 0.12)');
      radial2.addColorStop(0.4, 'rgba(217, 119, 6, 0.04)');
      radial2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radial2;
      ctx.fillRect(0, 0, width, height);

      // Constellation lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            const lineOpacity = (1 - dist / 85) * 0.12;
            ctx.strokeStyle = `rgba(245, 158, 11, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw star nodes
      for (const star of stars) {
        star.alpha += star.alphaSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.alphaSpeed = -star.alphaSpeed;
        }
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const offsetX = (star.x - mouseX) * 0.0003;
        const offsetY = (star.y - mouseY) * 0.0003;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x + offsetX, star.y + offsetY, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle =
            star.color === '#ffffff' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(245, 158, 11, 0.25)';
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      triggerShootingStar();

      if (shootingStar.active) {
        const startX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const startY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
        const grad = ctx.createLinearGradient(startX, startY, shootingStar.x, shootingStar.y);
        grad.addColorStop(0, 'rgba(254, 240, 138, 0)');
        grad.addColorStop(0.7, `rgba(245, 158, 11, ${shootingStar.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.015;
        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
};
