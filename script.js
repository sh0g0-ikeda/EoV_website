const starfields = document.querySelectorAll(".starfield");
const revealTargets = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageSwitch = document.querySelector("[data-lang-toggle]");
const descriptionMeta = document.querySelector('meta[name="description"]');

const translations = {
  ja: {
    title: "Edge of Vision | 宇宙発想のAIプロダクトハブ",
    description:
      "Edge of Visionは、個人の能力の限界をAI技術を用いて出来る限り拡張し、個人が言語性知能や特定の技能の有無に制約されない社会を目指します。",
    languageToggle: "ENG",
    languageToggleAria: "Switch site language to English",
    navToggleLabel: "ナビゲーションを開閉",
    navHome: "ホーム",
    navProducts: "プロダクト",
    navProjects: "プロジェクト",
    navAbout: "概要",
    navContact: "連絡先",
    heroKicker: "Cosmic Intelligence",
    heroLede: "AIで人の能力の限界を打ち壊す。",
    heroCopy:
      "Edge of Visionは、個人の能力の限界をAI技術を用いて出来る限り拡張し、個人が言語性知能や特定の技能の有無に制約されない社会を目指します。",
    heroPrimaryCta: "プロダクトを見る",
    heroSecondaryCta: "プロジェクトを見る",
    visionKicker: "思想",
    visionHeading: "AIは人間の知性を置き換えない。",
    visionQuote: "それを拡張するための道具である。",
    visionBody:
      "Edge of Visionは、AIを個人の能力を押し広げるための実用的な技術として扱います。言語性知能や専門技能の差によって可能性が閉じない社会を目指します。",
    productsKicker: "プロダクト",
    productsHeading: "限界を拡張するプロダクト群。",
    productsLaunch: "プロダクト一覧へ",
    product1Status: "運用中",
    product1Title: "Tradog",
    product1Body:
      "株、投資信託、仮想通貨、貴金属など様々な種類の資産を一括でアラート管理できるツールです。",
    product1Tag1: "株",
    product1Tag2: "投資信託",
    product1Tag3: "仮想通貨・貴金属",
    product2Status: "クリエイティブ基盤",
    product2Title: "Lyra",
    product2Body:
      "発想、場面設計、スタイル調整、ストーリーボード化までを支えるAIマンガ制作ワークフローです。",
    product2Tag1: "マンガ生成",
    product2Tag2: "構成支援",
    product2Tag3: "スタイル制御",
    product3Status: "構想中",
    product3Title: "The Council",
    product3Body:
      "歴史上の人物や今を時めく著名人をAIエージェントとして議論させる掲示板型SNS。",
    product3Tag1: "歴史人物AI",
    product3Tag2: "SNS",
    product3Tag3: "対話体験",
    product3Link: "構想を追う",
    product4Status: "Solomon",
    product4Title: "Vibe Coding Competition",
    product4Body:
      "バイブコーディング専用のプログラミングコンペ。AIと人の即興的な開発感覚を競技として成立させます。",
    product4Tag1: "バイブコーディング",
    product4Tag2: "プログラミングコンペ",
    product4Tag3: "即興開発",
    product4Link: "企画を見る",
    productLink: "詳細ページを準備中",
    projectsKicker: "プロジェクト",
    projectsHeading: "単純作業に特化した極小AIエージェント。",
    project1Title: "極小AIエージェント",
    project1Body:
      "単純作業だけに特化し、実用性の境界を極小のコストで動かすものとして設計・検証しています。",
    ctaHeading: "私たちの仕事を見る。",
    ctaBody:
      "プロダクト一覧と進行中のプロジェクトを見ることで、Edge of Visionがどこへ向かっているかを掴めます。",
    ctaPrimary: "プロダクトハブを開く",
    ctaSecondary: "プロジェクトを見る",
    footerDirectoryTitle: "サイト",
    footerVisionLink: "思想",
    footerContactTitle: "連絡先",
    footerBackTop: "上に戻る",
  },
  en: {
    title: "Edge of Vision | Cosmic AI Product Hub",
    description:
      "Edge of Vision aims to extend the limits of individual capability with AI and build a society where people are not constrained by verbal intelligence or specific technical skills.",
    languageToggle: "JP",
    languageToggleAria: "日本語で表示",
    navToggleLabel: "Toggle navigation",
    navHome: "Home",
    navProducts: "Products",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "Cosmic Intelligence",
    heroLede: "Break the limits of human capability with AI.",
    heroCopy:
      "Edge of Vision aims to extend the limits of individual capability with AI and build a society where people are not constrained by verbal intelligence or specific technical skills.",
    heroPrimaryCta: "Explore Products",
    heroSecondaryCta: "View Projects",
    visionKicker: "Vision",
    visionHeading: "AI does not replace human intelligence.",
    visionQuote: "It is a tool to extend it.",
    visionBody:
      "Edge of Vision treats AI as a practical tool for pushing personal capability outward. The goal is a society where possibility is not closed off by differences in verbal intelligence or specialist skill.",
    productsKicker: "Products",
    productsHeading: "Products that extend limits.",
    productsLaunch: "Explore Products",
    product1Status: "Active",
    product1Title: "Tradog",
    product1Body:
      "A tool that manages alerts across stocks, mutual funds, crypto assets, precious metals, and other asset classes in one place.",
    product1Tag1: "Stocks",
    product1Tag2: "Mutual funds",
    product1Tag3: "Crypto and metals",
    product2Status: "Creative pipeline",
    product2Title: "Lyra",
    product2Body:
      "An AI manga workflow supporting ideation, scene design, style alignment, and storyboard generation.",
    product2Tag1: "Manga generation",
    product2Tag2: "Structure support",
    product2Tag3: "Style control",
    product3Status: "Concept phase",
    product3Title: "The Council",
    product3Body:
      "A bulletin-board style social network where historical figures and major contemporary public figures debate as AI agents.",
    product3Tag1: "Historical AI",
    product3Tag2: "Social network",
    product3Tag3: "Dialogue systems",
    product3Link: "Follow the concept",
    product4Status: "Solomon",
    product4Title: "Vibe Coding Competition",
    product4Body:
      "A programming competition dedicated to vibe coding, turning improvisational human and AI development into a competitive format.",
    product4Tag1: "Vibe coding",
    product4Tag2: "Programming contest",
    product4Tag3: "Improvised builds",
    product4Link: "See the concept",
    productLink: "Product page coming soon",
    projectsKicker: "Projects",
    projectsHeading: "Tiny AI agents for narrowly defined repetitive work.",
    project1Title: "Tiny AI Agents",
    project1Body:
      "Small AI agents are being designed and tested to handle narrowly scoped repetitive tasks at the edge of practicality with extremely low cost.",
    ctaHeading: "Explore our work.",
    ctaBody:
      "The product list and active project layer make the direction of Edge of Vision immediately visible.",
    ctaPrimary: "Open product hub",
    ctaSecondary: "View projects",
    footerDirectoryTitle: "Directory",
    footerVisionLink: "Vision",
    footerContactTitle: "Contact",
    footerBackTop: "Back to top",
  },
};

function buildStars(field) {
  const total = Number(field.dataset.stars || 40);

  for (let index = 0; index < total; index += 1) {
    const star = document.createElement("span");
    const size = (Math.random() * 2.4 + 1).toFixed(2);
    const duration = (Math.random() * 4 + 2).toFixed(2);
    const delay = (Math.random() * 4).toFixed(2);

    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty("--twinkle-duration", `${duration}s`);
    star.style.setProperty("--twinkle-delay", `${delay}s`);

    field.appendChild(star);
  }
}

function parallaxStars() {
  const offset = window.scrollY;

  starfields.forEach((field) => {
    const speed = Number(field.dataset.speed || 0.15);
    field.style.transform = `translateY(${offset * speed}px)`;
  });
}

function syncHeaderState() {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "ja";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.body.dataset.language = selectedLanguage;
  document.title = dictionary.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;

    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  if (languageSwitch) {
    languageSwitch.textContent = dictionary.languageToggle;
    languageSwitch.setAttribute("aria-label", dictionary.languageToggleAria);
    languageSwitch.title = dictionary.languageToggleAria;
  }

  try {
    localStorage.setItem("eov-language", selectedLanguage);
  } catch (error) {
    // Ignore storage failures in restricted environments.
  }

  try {
    const nextUrl = new URL(window.location.href);

    if (selectedLanguage === "en") {
      nextUrl.searchParams.set("lang", "en");
    } else {
      nextUrl.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", nextUrl);
  } catch (error) {
    // Ignore URL mutation failures in restricted environments.
  }
}

function getInitialLanguage() {
  try {
    const searchLanguage = new URLSearchParams(window.location.search).get("lang");

    if (searchLanguage && translations[searchLanguage]) {
      return searchLanguage;
    }
  } catch (error) {
    // Ignore URL parsing failures in restricted environments.
  }

  try {
    const storedLanguage = localStorage.getItem("eov-language");

    if (storedLanguage && translations[storedLanguage]) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore storage failures in restricted environments.
  }

  return "ja";
}

starfields.forEach(buildStars);
parallaxStars();
syncHeaderState();
applyLanguage(getInitialLanguage());

window.addEventListener("scroll", () => {
  parallaxStars();
  syncHeaderState();
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

if (languageSwitch) {
  languageSwitch.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "ja" ? "en" : "ja";
    applyLanguage(nextLanguage);
  });
}

if (navToggle && siteNav && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
