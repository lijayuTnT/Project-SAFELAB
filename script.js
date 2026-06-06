(function () {
  const canvas = document.getElementById("safety-layer-canvas");
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let strands = [];
  let sparks = [];
  let animationFrame = 0;
  let startTime = performance.now();

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildScene();
    if (prefersReducedMotion.matches) {
      render(performance.now());
    }
  }

  function buildScene() {
    const mobile = width < 720;
    const layerX = mobile ? width * 0.66 : width * 0.76;
    const centerY = mobile ? height * 0.66 : height * 0.53;
    const leftX = mobile ? width * 0.12 : width * 0.33;
    const outputX = width + 120;
    const count = mobile ? 42 : 78;

    strands = Array.from({ length: count }, (_, index) => {
      const t = count === 1 ? 0 : index / (count - 1);
      const spread = mobile ? height * 0.2 : height * 0.33;
      const y = centerY + (t - 0.5) * spread;
      const pinch = 1 - Math.abs(t - 0.5) * 1.4;

      return {
        leftX: leftX - random(60, 190),
        layerX,
        outputX,
        y,
        endY: centerY + (t - 0.5) * (mobile ? height * 0.16 : height * 0.24),
        c1x: random(leftX + 70, layerX - 230),
        c2x: random(layerX - 260, layerX - 54),
        lift: random(-70, 70) * pinch,
        phase: random(0, Math.PI * 2),
        speed: random(0.26, 0.76),
        alpha: random(0.18, 0.72),
        width: random(0.45, 1.25)
      };
    });

    sparks = Array.from({ length: mobile ? 42 : 110 }, () => ({
      x: random(leftX, layerX + 220),
      y: random(centerY - height * 0.2, centerY + height * 0.2),
      r: random(0.45, 1.8),
      phase: random(0, Math.PI * 2),
      speed: random(0.5, 1.7),
      drift: random(10, 64),
      alpha: random(0.28, 0.95)
    }));
  }

  function drawBezier(strand, time) {
    const shimmer = Math.sin(time * strand.speed + strand.phase) * 16;
    const y1 = strand.y + shimmer * 0.18;
    const y2 = strand.endY + Math.sin(time * strand.speed * 0.72 + strand.phase) * 10;
    const layerX = strand.layerX + Math.sin(time * 0.35 + strand.phase) * 3;

    const gradient = ctx.createLinearGradient(strand.leftX, y1, strand.outputX, y2);
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.34, `rgba(255,255,255,${strand.alpha * 0.48})`);
    gradient.addColorStop(0.68, `rgba(255,255,255,${strand.alpha})`);
    gradient.addColorStop(1, `rgba(255,255,255,${strand.alpha * 0.32})`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = strand.width;
    ctx.beginPath();
    ctx.moveTo(strand.leftX, y1);
    ctx.bezierCurveTo(
      strand.c1x,
      y1 + strand.lift,
      strand.c2x,
      y2 - strand.lift * 0.75,
      layerX,
      y2
    );
    ctx.lineTo(strand.outputX, y2 + Math.sin(time * 0.7 + strand.phase) * 1.8);
    ctx.stroke();

    const head = ((time * strand.speed * 0.08 + strand.phase) % 1 + 1) % 1;
    const glowX = strand.leftX + (layerX - strand.leftX) * head;
    const glowY = y1 + (y2 - y1) * head + Math.sin(head * Math.PI) * strand.lift * 0.34;

    ctx.fillStyle = `rgba(255,255,255,${Math.min(0.95, strand.alpha + 0.2)})`;
    ctx.beginPath();
    ctx.arc(glowX, glowY, strand.width * 1.7, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawSafetyLayer(time) {
    const mobile = width < 720;
    const layerX = mobile ? width * 0.66 : width * 0.76;
    const centerY = mobile ? height * 0.66 : height * 0.53;
    const layerHeight = mobile ? height * 0.38 : height * 0.58;
    const top = centerY - layerHeight / 2;
    const bottom = centerY + layerHeight / 2;
    const skew = mobile ? 24 : 70;
    const pulse = 0.55 + Math.sin(time * 1.7) * 0.18;

    ctx.save();
    ctx.shadowColor = "rgba(255,255,255,0.88)";
    ctx.shadowBlur = 20 + pulse * 16;
    ctx.strokeStyle = `rgba(255,255,255,${0.72 + pulse * 0.24})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(layerX, top);
    ctx.lineTo(layerX, bottom);
    ctx.stroke();
    ctx.restore();

    const plane = ctx.createLinearGradient(layerX - skew, top, layerX, bottom);
    plane.addColorStop(0, "rgba(255,255,255,0)");
    plane.addColorStop(0.55, "rgba(255,255,255,0.22)");
    plane.addColorStop(1, "rgba(255,255,255,0)");

    ctx.strokeStyle = plane;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(layerX - skew, top + 76);
    ctx.lineTo(layerX, top);
    ctx.lineTo(layerX, bottom);
    ctx.lineTo(layerX - skew, bottom - 76);
    ctx.stroke();

    ctx.fillStyle = `rgba(255,255,255,${0.05 + pulse * 0.04})`;
    ctx.beginPath();
    ctx.moveTo(layerX - skew, top + 76);
    ctx.lineTo(layerX, top);
    ctx.lineTo(layerX, bottom);
    ctx.lineTo(layerX - skew, bottom - 76);
    ctx.closePath();
    ctx.fill();

    for (let i = 0; i < 18; i += 1) {
      const y = top + (i / 17) * layerHeight;
      ctx.strokeStyle = `rgba(255,255,255,${0.05 + (i % 5) * 0.015})`;
      ctx.beginPath();
      ctx.moveTo(layerX - skew * (1 - i / 34), y);
      ctx.lineTo(layerX + width * 0.3, y + Math.sin(time + i) * 1.2);
      ctx.stroke();
    }
  }

  function drawSparks(time) {
    for (const spark of sparks) {
      const drift = ((time * spark.speed * 12 + spark.phase * 20) % spark.drift) - spark.drift * 0.5;
      const blink = 0.25 + Math.max(0, Math.sin(time * spark.speed + spark.phase)) * 0.75;

      ctx.fillStyle = `rgba(255,255,255,${spark.alpha * blink})`;
      ctx.beginPath();
      ctx.arc(spark.x + drift, spark.y + Math.sin(time * spark.speed + spark.phase) * 8, spark.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function render(now) {
    const elapsed = (now - startTime) / 1000;
    ctx.clearRect(0, 0, width, height);

    const vignette = ctx.createRadialGradient(width * 0.68, height * 0.48, 0, width * 0.68, height * 0.48, width * 0.62);
    vignette.addColorStop(0, "rgba(255,255,255,0.06)");
    vignette.addColorStop(0.3, "rgba(80,110,135,0.05)");
    vignette.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "lighter";
    for (const strand of strands) {
      drawBezier(strand, elapsed);
    }
    drawSparks(elapsed);
    drawSafetyLayer(elapsed);
    ctx.globalCompositeOperation = "source-over";

    if (!prefersReducedMotion.matches) {
      animationFrame = requestAnimationFrame(render);
    }
  }

  function start() {
    cancelAnimationFrame(animationFrame);
    startTime = performance.now();
    resize();
    render(startTime);
  }

  window.addEventListener("resize", resize, { passive: true });
  if (typeof prefersReducedMotion.addEventListener === "function") {
    prefersReducedMotion.addEventListener("change", start);
  } else if (typeof prefersReducedMotion.addListener === "function") {
    prefersReducedMotion.addListener(start);
  }
  start();
})();
