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
        research: "Research",
        careers: "Careers",
        company: "Company"
      },
      cta: {
        bookDemo: "Book a Demo",
        watchOverview: "Watch Overview",
        learnMore: "Learn More"
      },
      hero: {
        title: "Building the Safety Infra<br />for Intelligence",
        copy: "Securing how AI thinks, acts, and interacts with the world.",
        flowInput: "AI INPUT",
        flowLayer: "SAFETY LAYER",
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
      company: {
        eyebrow: "COMPANY",
        title: "Building the Safety Infrastructure<br />for the Agentic Era",
        copy1: "XSafe AI is an AI safety company incubated by the Institute of Trustworthy Embodied AI at Fudan University.",
        copy2: "We build the infrastructure that helps intelligent systems remain safe, reliable, and governable.",
        copy3: "Our work spans safety evaluation, safety data generation, foundation model enhancement, runtime defense, and agent governance.",
        whyTitle: "Why We Exist",
        why1Title: "Intelligence is becoming agentic.",
        why1Copy: "AI systems are moving beyond generating answers. They are beginning to plan, decide, and act.",
        why2Title: "Agents will operate in the real world.",
        why2Copy: "They will use tools, access systems, collaborate with other agents, and interact with physical environments.",
        why3Title: "Safety must evolve with intelligence.",
        why3Copy: "As AI becomes more capable and autonomous, safety must become a foundational capability — not an afterthought.",
        challengeTitle: "The Challenge",
        challengeCopy: "Safety challenges evolve as intelligence becomes more capable.",
        timeline1: "Large Language Models",
        timelineOut1: "Output Safety",
        timeline2: "Foundation Models",
        timelineOut2: "Behavior Safety",
        timeline3: "AI Agents",
        timelineOut3: "Agent Safety",
        timeline4: "Embodied Intelligence",
        timelineOut4: "Embodied AI Safety",
        approachTitle: "Our Approach",
        approachCopy: "We address AI safety through three core capabilities that work together to build a complete safety infrastructure for intelligent systems.",
        approach1Title: "Runtime Defense",
        approach1Copy: "Protect agents during real-world execution with real-time detection and intervention.",
        approach2Title: "Safety Data Generation",
        approach2Copy: "Generate diverse, high-quality safety data at scale to improve coverage and robustness.",
        approach3Title: "Foundation Model Enhancement",
        approach3Copy: "Strengthen base models with safety at the core through alignment and capability improvement.",
        teamTitle: "Our Team",
        teamCopy: "Researchers, engineers, and entrepreneurs from leading universities and technology companies around the world.",
        industryTitle: "Industry Experience",
        academicTitle: "Academic Background",
        leadershipTitle: "Leadership",
        leadershipCopy: "An experienced leadership team with deep expertise in AI safety, research, engineering and entrepreneurship.",
        leader1Name: "Jianjian Zhang",
        leader1Role: "Founder & CEO",
        leader1Point1: "Serial entrepreneur",
        leader1Point2: "10+ years of experience",
        leader1Point3: "Strategy & Business",
        leader2Name: "Xingjun Ma",
        leader2Role: "Founder & Chief Scientist",
        leader2Point1: "AI safety researcher",
        leader2Point2: "10,000+ citations",
        leader2Point3: "Research & Trustworthy AI",
        leader3Name: "Mark Ji",
        leader3Role: "Founder & CTO",
        leader3Point1: "AI infrastructure expert",
        leader3Point2: "Experience at OpenAI & Mistral",
        leader3Point3: "Engineering & Platform",
        visionTitle: "Our Long-Term Vision",
        visionCopy: "AI safety is a multi-decade challenge. Our roadmap is organized around three stages.",
        visionNow: "Now",
        visionToday: "Today",
        visionNext: "Next",
        visionFuture: "Future",
        vision1Title: "Agent Safety",
        vision1Copy: "Building the core safety infrastructure required to evaluate, secure, and govern AI agents.",
        vision2Title: "Safe Agent-Powered Devices",
        vision2Copy: "Extending safety capabilities to next-generation intelligent devices and physical systems.",
        vision3Title: "Embodied AI Safety",
        vision3Copy: "Developing safety architectures for robots and embodied intelligent systems operating in the physical world.",
        missionTitle: "Our Mission",
        missionCopy: "Artificial intelligence is evolving from a tool into an actor. Safety will become one of the most important foundations of technological progress. To build the safety infrastructure for the agentic era, and help ensure that future superintelligent systems are safe by design.",
        contactUs: "Contact Us",
        joinUs: "Join Us"
      },
      terms: {
        metaTitle: "Terms of Service - XSafe AI",
        metaDescription: "Terms of Service for XSafe AI products, services, research materials, documentation, and related offerings.",
        eyebrow: "LEGAL",
        title: "Terms of Service",
        updated: "Last updated: June 2026",
        intro: "Welcome to XSafeAI. These Terms of Service govern your access to and use of our website, products, services, software, APIs, research materials, documentation, and related offerings. By using our Services, you agree to be bound by these Terms.",
        section1Title: "Eligibility",
        section1Body: "You must be legally capable of entering into a binding agreement and comply with all applicable laws and regulations when using our Services.",
        section2Title: "Permitted Use",
        section2Body: "You may use the Services only for lawful business, research, evaluation, testing, or educational purposes.",
        section2Point1: "Do not violate applicable laws or regulations.",
        section2Point2: "Do not attempt unauthorized access to systems, networks, or data.",
        section2Point3: "Do not interfere with the operation, integrity, or security of the Services.",
        section2Point4: "Do not reverse engineer, decompile, or misuse the Services except where permitted by law.",
        section2Point5: "Do not use the Services to develop, facilitate, or deploy malicious, harmful, deceptive, or unlawful AI systems.",
        section3Title: "Customer Content",
        section3Body: "You retain ownership of data, prompts, configurations, files, logs, model outputs, or other materials that you submit to the Services. You grant XSafeAI a limited license to process Customer Content solely for the purpose of providing, maintaining, securing, and improving the Services.",
        section4Title: "AI-Generated Content",
        section4Body: "Certain Services may generate automated analyses, recommendations, reports, risk assessments, security findings, model evaluations, or other outputs. Such outputs are generated through automated systems and may contain inaccuracies or incomplete information. You are solely responsible for evaluating and verifying any outputs before relying upon them.",
        section5Title: "Intellectual Property",
        section5Body: "All rights, title, and interest in and to the Services, including software, models, documentation, designs, trademarks, logos, and research materials, remain the exclusive property of XSafeAI and its licensors.",
        section6Title: "Security and Responsible Use",
        section6Body: "XSafeAI develops technologies intended to improve the security, safety, and governance of AI systems. You agree not to use the Services to create or distribute malware, facilitate cyberattacks, evade security controls, conduct unauthorized penetration testing, generate unlawful or harmful content, or support activities that may cause physical, financial, or societal harm.",
        section7Title: "Third-Party Services",
        section7Body: "The Services may integrate with third-party platforms, cloud providers, AI models, APIs, or software tools. XSafeAI is not responsible for third-party services and their respective terms, policies, availability, or performance.",
        section8Title: "Disclaimer",
        section8Body: "The Services are provided “as is” and “as available.” To the maximum extent permitted by law, XSafeAI disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.",
        section9Title: "Limitation of Liability",
        section9Body: "To the maximum extent permitted by law, XSafeAI shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages. In no event shall XSafeAI’s aggregate liability exceed the amount paid by you to XSafeAI during the twelve months preceding the claim.",
        section10Title: "Termination",
        section10Body: "We may suspend or terminate access to the Services at any time if we reasonably believe these Terms have been violated or if required by law.",
        section11Title: "Changes",
        section11Body: "We may update these Terms periodically. Continued use of the Services after publication of revised Terms constitutes acceptance of the updated Terms.",
        section12Title: "Contact",
        section12Body: "Questions regarding these Terms may be directed to"
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
        research: "研究",
        careers: "招聘",
        company: "公司"
      },
      cta: {
        bookDemo: "预约演示",
        watchOverview: "观看概览",
        learnMore: "了解更多"
      },
      hero: {
        title: "为智能构建<br />安全基础设施",
        copy: "守护 AI 思考、行动并与世界交互的方式。",
        flowInput: "AI 输入",
        flowLayer: "安全层",
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
      company: {
        eyebrow: "公司",
        title: "构建智能体时代的<br />安全基础设施",
        copy1: "XSafe AI 是一家由复旦大学可信具身智能研究院孵化的 AI 安全公司。",
        copy2: "我们构建基础设施，帮助智能系统保持安全、可靠与可治理。",
        copy3: "我们的工作覆盖安全评估、安全数据生成、基础模型增强、运行时防御与智能体治理。",
        whyTitle: "我们为何存在",
        why1Title: "智能正在走向智能体化。",
        why1Copy: "AI 系统正在超越生成答案，开始规划、决策并执行行动。",
        why2Title: "智能体将运行在真实世界中。",
        why2Copy: "它们会使用工具、访问系统、与其他智能体协作，并与物理环境交互。",
        why3Title: "安全必须随智能一起演进。",
        why3Copy: "当 AI 更强大、更自主时，安全必须成为基础能力，而不是事后补丁。",
        challengeTitle: "挑战",
        challengeCopy: "随着智能能力提升，安全挑战也在持续演化。",
        timeline1: "大语言模型",
        timelineOut1: "输出安全",
        timeline2: "基础模型",
        timelineOut2: "行为安全",
        timeline3: "AI 智能体",
        timelineOut3: "智能体安全",
        timeline4: "具身智能",
        timelineOut4: "具身 AI 安全",
        approachTitle: "我们的方法",
        approachCopy: "我们通过三项核心能力协同构建面向智能系统的完整安全基础设施。",
        approach1Title: "运行时防御",
        approach1Copy: "在真实执行过程中，通过实时检测与干预保护智能体。",
        approach2Title: "安全数据生成",
        approach2Copy: "大规模生成多样、高质量的安全数据，提升覆盖率与鲁棒性。",
        approach3Title: "基础模型增强",
        approach3Copy: "以安全为核心，通过对齐与能力改进强化基础模型。",
        teamTitle: "我们的团队",
        teamCopy: "团队由来自全球领先高校与科技公司的研究者、工程师和创业者组成。",
        industryTitle: "产业经验",
        academicTitle: "学术背景",
        leadershipTitle: "领导团队",
        leadershipCopy: "一支拥有 AI 安全、研究、工程与创业经验的领导团队。",
        leader1Name: "Jianjian Zhang",
        leader1Role: "创始人兼 CEO",
        leader1Point1: "连续创业者",
        leader1Point2: "10 年以上行业经验",
        leader1Point3: "战略与商业化",
        leader2Name: "Xingjun Ma",
        leader2Role: "创始人兼首席科学家",
        leader2Point1: "AI 安全研究者",
        leader2Point2: "10,000+ 学术引用",
        leader2Point3: "研究与可信 AI",
        leader3Name: "Mark Ji",
        leader3Role: "创始人兼 CTO",
        leader3Point1: "AI 基础设施专家",
        leader3Point2: "曾任职 OpenAI 与 Mistral",
        leader3Point3: "工程与平台",
        visionTitle: "长期愿景",
        visionCopy: "AI 安全是一项跨越数十年的挑战，我们的路线图围绕三个阶段展开。",
        visionNow: "现在",
        visionToday: "今天",
        visionNext: "下一步",
        visionFuture: "未来",
        vision1Title: "智能体安全",
        vision1Copy: "构建评估、保护和治理 AI 智能体所需的核心安全基础设施。",
        vision2Title: "安全的智能体驱动设备",
        vision2Copy: "将安全能力扩展到下一代智能设备与物理系统。",
        vision3Title: "具身 AI 安全",
        vision3Copy: "为机器人和运行在物理世界中的具身智能系统开发安全架构。",
        missionTitle: "我们的使命",
        missionCopy: "人工智能正在从工具演化为行动者。安全将成为技术进步最重要的基础之一。我们致力于构建智能体时代的安全基础设施，帮助未来的超级智能系统从设计之初就具备安全性。",
        contactUs: "联系我们",
        joinUs: "加入我们"
      },
      terms: {
        metaTitle: "服务条款 - XSafe AI",
        metaDescription: "XSafe AI 产品、服务、研究材料、文档及相关内容的服务条款。",
        eyebrow: "法律",
        title: "服务条款",
        updated: "最后更新：2026 年 6 月",
        intro: "欢迎使用 XSafeAI。本服务条款适用于您访问和使用我们的网站、产品、服务、软件、API、研究材料、文档及相关内容。使用我们的服务即表示您同意受本条款约束。",
        section1Title: "资格",
        section1Body: "您必须具备订立有约束力协议的合法能力，并在使用我们的服务时遵守所有适用法律法规。",
        section2Title: "允许的使用",
        section2Body: "您仅可将服务用于合法的商业、研究、评估、测试或教育目的。",
        section2Point1: "不得违反适用法律或法规。",
        section2Point2: "不得尝试未经授权访问系统、网络或数据。",
        section2Point3: "不得干扰服务的运行、完整性或安全性。",
        section2Point4: "除法律允许外，不得逆向工程、反编译或滥用服务。",
        section2Point5: "不得使用服务开发、促成或部署恶意、有害、欺骗性或非法的 AI 系统。",
        section3Title: "客户内容",
        section3Body: "您保留提交至服务的数据、提示词、配置、文件、日志、模型输出或其他材料的所有权。您授予 XSafeAI 有限许可，仅为提供、维护、保护和改进服务之目的处理客户内容。",
        section4Title: "AI 生成内容",
        section4Body: "某些服务可能生成自动化分析、建议、报告、风险评估、安全发现、模型评测或其他输出。此类输出由自动化系统生成，可能存在不准确或不完整的信息。您应在依赖任何输出前自行评估和验证。",
        section5Title: "知识产权",
        section5Body: "服务中的所有权利、所有权和权益，包括软件、模型、文档、设计、商标、标识和研究材料，均归 XSafeAI 及其许可方专有。",
        section6Title: "安全与负责任使用",
        section6Body: "XSafeAI 开发旨在提升 AI 系统安全性、可靠性和治理能力的技术。您同意不使用服务创建或传播恶意软件、促成网络攻击、规避安全控制、进行未经授权的渗透测试、生成非法或有害内容，或支持可能造成身体、财务或社会伤害的活动。",
        section7Title: "第三方服务",
        section7Body: "服务可能与第三方平台、云服务提供商、AI 模型、API 或软件工具集成。XSafeAI 不对第三方服务及其条款、政策、可用性或性能负责。",
        section8Title: "免责声明",
        section8Body: "服务按“现状”和“可用”提供。在法律允许的最大范围内，XSafeAI 不作任何明示、默示、法定或其他形式的保证，包括适销性、特定用途适用性、不侵权和准确性的保证。",
        section9Title: "责任限制",
        section9Body: "在法律允许的最大范围内，XSafeAI 不对任何间接、附带、特殊、后果性、惩戒性或惩罚性损害承担责任。在任何情况下，XSafeAI 的累计责任均不超过您在索赔发生前十二个月内向 XSafeAI 支付的金额。",
        section10Title: "终止",
        section10Body: "如果我们合理认为您违反了本条款，或法律要求我们这样做，我们可以随时暂停或终止您对服务的访问。",
        section11Title: "变更",
        section11Body: "我们可能会不时更新本条款。修订条款发布后继续使用服务，即表示您接受更新后的条款。",
        section12Title: "联系方式",
        section12Body: "有关本条款的问题可发送至"
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
