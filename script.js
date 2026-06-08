(function () {
  const translations = {
    en: {
      meta: {
        title: "XSafe AI - The Safety Layer for Intelligence",
        description: "XSafe AI discovers risks, generates defenses, and builds safer intelligence through evaluation, data, and safety foundation models."
      },
      aria: {
        primaryNav: "Primary navigation",
        mainMenu: "Main menu",
        footerMenu: "Footer menu",
        home: "XSafe AI home"
      },
      language: {
        current: "EN",
        switchLabel: "Switch to Chinese"
      },
      nav: {
        products: "Products",
        technology: "Technology",
        solutions: "Solutions",
        resources: "Resources",
        company: "Company"
      },
      cta: {
        bookDemo: "Book a Demo",
        watchOverview: "Watch Overview",
        learnMore: "Learn More"
      },
      hero: {
        title: "The Safety Layer<br />for Intelligence",
        copy: "Discover Risks. Generate Defenses. Build Safer Intelligence.",
        flowInput: "AI INPUT",
        flowLayer: "XSafe AI<br />SAFETY LAYER",
        flowOutput: "SAFE OUTPUT"
      },
      flywheel: {
        title: "The Safety Flywheel",
        copy: "A closed-loop system that continuously evolves AI safety.",
        aria: "Evaluation, data, and models form a continuous improvement loop",
        centerTop: "Continuous",
        centerBottom: "Improvement",
        evaluationTitle: "EVALUATION<br />(PICUS)",
        evaluationSubtitle: "Agentic Evaluation Engine",
        evaluationCopy: "Discover vulnerabilities anytime, anywhere.",
        modelsTitle: "MODELS<br /><em>(SAFETY<br />FOUNDATION)</em>",
        modelsSubtitle: "Safety Foundation Models",
        modelsCopy: "Align and strengthen models with safety at the core.",
        dataTitle: "DATA<br />(HYDRA)",
        dataSubtitle: "Safety Data Engine",
        dataCopy: "Generate diverse safety data at scale."
      },
      products: {
        title: "Our Core Products",
        picusSubtitle: "Agentic Evaluation Engine",
        picusPoint1: "Continuous Evaluation",
        picusPoint2: "Adaptive &amp; Flexible",
        picusPoint3: "Real-world Simulations",
        hydraSubtitle: "Safety Data Engine",
        hydraPoint1: "Harmful Data Generation",
        hydraPoint2: "Attack Data Generation",
        hydraPoint3: "Agent Risk Action Data",
        argusSubtitle: "Multi-Agent Security Plane",
        argusPoint1: "Multi-Agent Governance",
        argusPoint2: "Risk Monitoring",
        argusPoint3: "Active Protection"
      },
      scale: {
        title: "Intelligence is scaling.<br class=\"desktop-break\" /><span class=\"keep-line\">Safety must scale with it.</span>",
        copy: "XSafe AI - Building the safety layer for a smarter tomorrow."
      },
      metrics: {
        evaluations: "Evaluations<br />Executed",
        data: "Safety Data<br />Generated",
        models: "Foundation Models<br />Secured",
        intelligence: "Safer Intelligence<br />for All"
      },
      footer: {
        rights: "© 2026 XSafeAI.com All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
      }
    },
    zh: {
      meta: {
        title: "XSafe AI - 智能的安全层",
        description: "XSafe AI 通过评估、数据与安全基础模型发现风险、生成防御并构建更安全的智能。"
      },
      aria: {
        primaryNav: "主导航",
        mainMenu: "主菜单",
        footerMenu: "页脚菜单",
        home: "XSafe AI 首页"
      },
      language: {
        current: "中",
        switchLabel: "切换到英文"
      },
      nav: {
        products: "产品",
        technology: "技术",
        solutions: "方案",
        resources: "资源",
        company: "公司"
      },
      cta: {
        bookDemo: "预约演示",
        watchOverview: "观看概览",
        learnMore: "了解更多"
      },
      hero: {
        title: "智能时代的<br />安全层",
        copy: "发现风险。生成防御。构建更安全的智能。",
        flowInput: "AI 输入",
        flowLayer: "XSafe AI<br />安全层",
        flowOutput: "安全输出"
      },
      flywheel: {
        title: "安全飞轮",
        copy: "一个持续演进 AI 安全能力的闭环系统。",
        aria: "评估、数据和模型构成持续改进闭环",
        centerTop: "持续",
        centerBottom: "改进",
        evaluationTitle: "评估<br />（PICUS）",
        evaluationSubtitle: "智能体评估引擎",
        evaluationCopy: "随时随地发现潜在漏洞。",
        modelsTitle: "模型<br /><em>（安全<br />基础模型）</em>",
        modelsSubtitle: "安全基础模型",
        modelsCopy: "以安全为核心对齐并强化模型。",
        dataTitle: "数据<br />（HYDRA）",
        dataSubtitle: "安全数据引擎",
        dataCopy: "生成多样、可扩展的安全数据。"
      },
      products: {
        title: "核心产品",
        picusSubtitle: "智能体评估引擎",
        picusPoint1: "持续评估",
        picusPoint2: "自适应且灵活",
        picusPoint3: "真实场景模拟",
        hydraSubtitle: "安全数据引擎",
        hydraPoint1: "有害数据生成",
        hydraPoint2: "攻击数据生成",
        hydraPoint3: "智能体风险动作数据",
        argusSubtitle: "多智能体安全平面",
        argusPoint1: "多智能体治理",
        argusPoint2: "风险监控",
        argusPoint3: "主动防护"
      },
      scale: {
        title: "智能正在扩展。<br class=\"desktop-break\" /><span class=\"keep-line\">安全也必须同步扩展。</span>",
        copy: "XSafe AI - 为更智能的未来构建安全层。"
      },
      metrics: {
        evaluations: "已执行<br />评估",
        data: "已生成<br />安全数据",
        models: "已保护<br />基础模型",
        intelligence: "更安全智能<br />惠及所有人"
      },
      footer: {
        rights: "© 2026 XSafeAI.com 版权所有。",
        privacy: "隐私政策",
        terms: "服务条款",
        contact: "联系我们"
      }
    }
  };

  const storageKey = "xsafe-language";
  const supportedLanguages = ["en", "zh"];
  let currentLanguage = "en";

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      return;
    }
  }

  function getTranslation(language, key) {
    return key.split(".").reduce((value, part) => {
      if (value && Object.prototype.hasOwnProperty.call(value, part)) {
        return value[part];
      }
      return undefined;
    }, translations[language]);
  }

  function applyLanguage(language) {
    const nextLanguage = supportedLanguages.includes(language) ? language : "en";
    currentLanguage = nextLanguage;

    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getTranslation(nextLanguage, element.dataset.i18n);
      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const value = getTranslation(nextLanguage, element.dataset.i18nContent);
      if (typeof value === "string") {
        element.setAttribute("content", value);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = getTranslation(nextLanguage, element.dataset.i18nAriaLabel);
      if (typeof value === "string") {
        element.setAttribute("aria-label", value);
      }
    });

    document.title = translations[nextLanguage].meta.title;

    const languageLabel = document.querySelector("[data-lang-label]");
    if (languageLabel) {
      languageLabel.textContent = translations[nextLanguage].language.current;
    }

    const languageButton = document.querySelector(".lang-button");
    if (languageButton) {
      languageButton.dataset.lang = nextLanguage;
      languageButton.setAttribute("aria-label", translations[nextLanguage].language.switchLabel);
      languageButton.setAttribute("title", translations[nextLanguage].language.switchLabel);
    }

    saveLanguage(nextLanguage);
  }

  const storedLanguage = readStoredLanguage();
  const initialLanguage = supportedLanguages.includes(storedLanguage) ? storedLanguage : "en";
  const languageButton = document.querySelector(".lang-button");

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      applyLanguage(currentLanguage === "en" ? "zh" : "en");
    });
  }

  applyLanguage(initialLanguage);
})();

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
  let impacts = [];
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

    const impactCount = mobile ? 5 : 8;
    impacts = Array.from({ length: impactCount }, (_, index) => {
      const lane = impactCount === 1 ? 0.5 : index / (impactCount - 1);
      return {
        layerX,
        y: centerY + (lane - 0.5) * (mobile ? height * 0.16 : height * 0.26) + random(-12, 12),
        travel: random(mobile ? 130 : 210, mobile ? 230 : 360),
        phase: random(0, 1),
        speed: random(0.18, 0.34),
        scatter: random(0.65, 1.15),
        size: random(1.2, 2.2)
      };
    });
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

  function drawImpacts(time) {
    for (const impact of impacts) {
      const cycle = (time * impact.speed + impact.phase) % 1;
      const impactStart = 0.58;
      const impactEnd = 0.9;
      if (cycle > impactEnd) {
        continue;
      }

      const approach = Math.min(cycle / impactStart, 1);
      const ease = 1 - Math.pow(1 - approach, 2.6);
      const y = impact.y + Math.sin(time * 1.4 + impact.phase * 12) * 5;
      const x = impact.layerX - impact.travel * (1 - ease);

      const trail = ctx.createLinearGradient(x - 90, y, impact.layerX + 8, y);
      trail.addColorStop(0, "rgba(255,255,255,0)");
      trail.addColorStop(0.55, "rgba(210,232,255,0.18)");
      trail.addColorStop(1, "rgba(255,255,255,0.78)");

      ctx.strokeStyle = trail;
      ctx.lineWidth = impact.size * 0.72;
      ctx.beginPath();
      ctx.moveTo(x - 80, y + Math.sin(time * 2 + impact.phase) * 3);
      ctx.quadraticCurveTo((x + impact.layerX) / 2, y - 10, impact.layerX - 3, y);
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(x, y, impact.size, 0, Math.PI * 2);
      ctx.fill();

      if (cycle < impactStart || cycle > impactEnd) {
        continue;
      }

      const burst = Math.sin(((cycle - impactStart) / (impactEnd - impactStart)) * Math.PI);
      const burstRadius = (22 + burst * 58) * impact.scatter;
      const glow = ctx.createRadialGradient(impact.layerX, y, 0, impact.layerX, y, burstRadius);
      glow.addColorStop(0, `rgba(255,255,255,${0.68 * burst})`);
      glow.addColorStop(0.22, `rgba(190,225,255,${0.28 * burst})`);
      glow.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(impact.layerX, y, burstRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(255,255,255,${0.48 * burst})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(impact.layerX - 2, y, burstRadius * 0.72, Math.PI * 0.58, Math.PI * 1.42);
      ctx.stroke();

      ctx.strokeStyle = `rgba(180,220,255,${0.24 * burst})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(impact.layerX - 5, y, burstRadius * 1.05, Math.PI * 0.62, Math.PI * 1.38);
      ctx.stroke();

      for (let i = 0; i < 9; i += 1) {
        const angle = Math.PI * (0.58 + i * 0.105) + Math.sin(impact.phase * 8 + i) * 0.08;
        const distance = burstRadius * (0.22 + i * 0.07);
        const sx = impact.layerX + Math.cos(angle) * distance;
        const sy = y + Math.sin(angle) * distance;

        ctx.fillStyle = `rgba(255,255,255,${0.55 * burst * (1 - i / 12)})`;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.7, impact.size * (1 - i / 14)), 0, Math.PI * 2);
        ctx.fill();
      }
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
    drawImpacts(elapsed);
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

(function () {
  const canvases = Array.from(document.querySelectorAll(".product-card .product-visual"));
  if (!canvases.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scenes = canvases.map((canvas) => ({
    canvas,
    card: canvas.closest(".product-card"),
    ctx: canvas.getContext("2d"),
    width: 0,
    height: 0,
    dpr: 1,
    particles: []
  }));
  let animationFrame = 0;
  let startTime = performance.now();

  function resizeScene(scene) {
    const rect = scene.canvas.getBoundingClientRect();
    scene.dpr = Math.min(window.devicePixelRatio || 1, 2);
    scene.width = Math.max(1, Math.floor(rect.width));
    scene.height = Math.max(1, Math.floor(rect.height));
    scene.canvas.width = Math.floor(scene.width * scene.dpr);
    scene.canvas.height = Math.floor(scene.height * scene.dpr);
    scene.ctx.setTransform(scene.dpr, 0, 0, scene.dpr, 0, 0);
    buildParticles(scene);
  }

  function buildParticles(scene) {
    const type = scene.card ? scene.card.dataset.productVisual : "wave-left";
    const cols = Math.max(20, Math.round(scene.width / 13));
    const rows = Math.max(9, Math.round(scene.height / 18));
    const particles = [];

    if (type === "vortex") {
      scene.particles = particles;
      return;
    }

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const u = cols === 1 ? 0 : col / (cols - 1);
        const v = rows === 1 ? 0 : row / (rows - 1);
        particles.push({
          u,
          v,
          phase: (u * 7.1 + v * 4.3) * Math.PI,
          alpha: 0.22 + v * 0.48 + Math.sin(u * Math.PI) * 0.12,
          radius: 0.55 + v * 0.7
        });
      }
    }

    scene.particles = particles;
  }

  function drawWave(scene, time, mirror) {
    const { ctx, width, height, particles } = scene;
    const ridgeBase = height * 0.7;
    const ridgeLift = height * 0.3;
    const floor = height * 0.98;
    const direction = mirror ? -1 : 1;

    ctx.save();
    ctx.clearRect(0, 0, width, height);

    const shade = ctx.createLinearGradient(0, height * 0.36, 0, height);
    shade.addColorStop(0, "rgba(255,255,255,0)");
    shade.addColorStop(0.72, "rgba(255,255,255,0.03)");
    shade.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, width, height);

    for (const particle of particles) {
      const waveU = mirror ? 1 - particle.u : particle.u;
      const ridge = ridgeBase
        - Math.sin(waveU * Math.PI * 0.92) * ridgeLift
        + Math.sin(waveU * Math.PI * 2.55 + 0.45) * height * 0.085
        - Math.sin(waveU * Math.PI * 4.1) * height * 0.035;
      const perspective = particle.v ** 1.75;
      const travel = Math.sin(time * 0.42 + particle.phase) * 4.5;
      const x = (mirror ? width - particle.u * width : particle.u * width) + travel * direction;
      const y = ridge + perspective * (floor - ridge) + Math.sin(time * 0.55 + particle.phase) * (1.8 + particle.v * 3.1);
      const ridgeDistance = Math.abs(particle.v - 0.18);
      const ridgeGlow = Math.max(0, 1 - ridgeDistance * 4.2);
      const edgeFade = Math.sin(particle.u * Math.PI) ** 0.55;
      const alpha = (particle.alpha * 0.35 + ridgeGlow * 0.45) * edgeFade;

      ctx.fillStyle = `rgba(255,255,255,${Math.min(0.82, alpha)})`;
      ctx.beginPath();
      ctx.arc(x, y, particle.radius * (0.58 + particle.v * 0.65), 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalCompositeOperation = "lighter";
    for (let line = 0; line < 5; line += 1) {
      const offset = line * height * 0.032;
      const gradient = ctx.createLinearGradient(mirror ? width : 0, height * 0.75, mirror ? 0 : width, height * 0.42);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.45, `rgba(255,255,255,${0.028 + line * 0.006})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.65;
      ctx.beginPath();
      for (let step = 0; step <= 90; step += 1) {
        const u = step / 90;
        const waveU = mirror ? 1 - u : u;
        const x = mirror ? width - u * width : u * width;
        const y = ridgeBase
          - Math.sin(waveU * Math.PI * 0.92) * ridgeLift
          + Math.sin(waveU * Math.PI * 2.55 + 0.45) * height * 0.085
          - Math.sin(waveU * Math.PI * 4.1) * height * 0.035
          + offset
          + Math.sin(u * Math.PI * 3.4 + time * 0.45 + line) * 2.8;
        if (step === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawVortex(scene, time) {
    const { ctx, width, height } = scene;
    const cx = width * 0.78;
    const cy = height * 0.62;
    const maxRadius = Math.min(width, height) * 0.66;

    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (let arm = 0; arm < 9; arm += 1) {
      const armOffset = (arm / 9) * Math.PI * 2 + time * 0.07;
      const alpha = 0.06 + arm * 0.006;
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth = 0.72;
      ctx.beginPath();
      for (let step = 0; step <= 140; step += 1) {
        const t = step / 140;
        const radius = maxRadius * (0.1 + t * 0.95);
        const angle = armOffset + t * Math.PI * 2.2;
        const x = cx + Math.cos(angle) * radius * (0.98 + t * 0.12);
        const y = cy + Math.sin(angle) * radius * 0.78;
        if (step === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }

    for (let ring = 1; ring <= 7; ring += 1) {
      const radius = ring * maxRadius * 0.13;
      ctx.strokeStyle = `rgba(255,255,255,${0.08 + ring * 0.01})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.05, radius * 0.78, 0, -Math.PI * 0.22, Math.PI * 1.34);
      ctx.stroke();
    }

    for (let dash = 0; dash < 28; dash += 1) {
      const t = dash / 28;
      const angle = Math.PI * (0.9 + t * 1.58) + time * 0.08;
      const radius = maxRadius * (0.28 + t * 0.72);
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius * 0.78;
      ctx.fillStyle = `rgba(255,255,255,${0.08 + t * 0.18})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.7 + t * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    const fade = ctx.createLinearGradient(width * 0.35, 0, width, 0);
    fade.addColorStop(0, "rgba(0,0,0,0.72)");
    fade.addColorStop(0.32, "rgba(0,0,0,0.08)");
    fade.addColorStop(1, "rgba(0,0,0,0)");
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = fade;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  }

  function render(now) {
    const time = (now - startTime) / 1000;
    for (const scene of scenes) {
      const type = scene.card ? scene.card.dataset.productVisual : "wave-left";
      if (type === "vortex") {
        drawVortex(scene, time);
      } else {
        drawWave(scene, time, type === "wave-right");
      }
    }

    if (!prefersReducedMotion.matches) {
      animationFrame = requestAnimationFrame(render);
    }
  }

  function resize() {
    for (const scene of scenes) {
      resizeScene(scene);
    }
    if (prefersReducedMotion.matches) {
      render(performance.now());
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
