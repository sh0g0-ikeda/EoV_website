const starfields = document.querySelectorAll(".starfield");
const revealTargets = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const languageSwitch = document.querySelector("[data-lang-toggle]");
const descriptionMeta = document.querySelector('meta[name="description"]');

const translations = {
  ja: {
    title: "Edge of Vision",
    description:
      "Edge of Visionは、個人の能力の限界をAI技術を用いて出来る限り拡張し、個人が言語性知能や特定の技能の有無に制約されない社会を目指します。",
    languageToggle: "ENG",
    languageToggleAria: "Switch site language to English",
    navToggleLabel: "ナビゲーションを開閉",
    navHome: "ホーム",
    navProducts: "プロダクト",
    navAbout: "概要",
    navContact: "連絡先",
    heroKicker: "Cosmic Intelligence",
    heroLede: "AIで人の能力の限界を打ち壊す。",
    heroCopy:
      "Edge of Visionは、個人の能力の限界をAI技術を用いて出来る限り拡張し、個人が言語性知能や特定の技能の有無に制約されない社会を目指します。",
    heroPrimaryCta: "プロダクトを見る",
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
    product3Link: "使ってみる",
    productLink: "詳細ページを準備中",
    founderKicker: "代表",
    founderHeading: "代表挨拶",
    founderLead:
      "0から1を生み出せる人に、1を100に拡張するための「人間拡張」を提供する。",
    founderMessage1:
      "このビジョンのもと、私はEdge of Visionを創業しました。",
    founderMessage2:
      "生成AIの進化により、創作や開発の生産性は飛躍的に向上しました。しかし本質は変わっていません。最初の「1」──すなわち構想や視点、問いを生み出すのは依然として人間です。",
    founderMessage3:
      "実際、「面白い話を書いて」と入力しても優れた作品は生まれません。一方で、明確な構想や意図を与えれば、AIはそれを高い解像度で拡張し、想像以上のアウトプットへと引き上げます。",
    founderMessage4:
      "問題は、その「1」を「100」に拡張する過程にあります。現状のAI活用には、ツールの習熟、試行錯誤、非効率なプロンプト調整など、多くの摩擦が存在します。その結果、本来価値を生み出せるはずの人材が、技術的ハードルによって機会を失っています。",
    founderMessage5:
      "Edge of Visionは、この摩擦を取り除きます。創造の本質である「1」を生み出す力に集中できる環境を提供し、その価値を最大化することを目的としています。",
    founderMessage6:
      "たとえば、漫画制作支援ツール「Lyra」は、構想段階からストーリーを構造的に展開し、一貫性のある作画を実現します。また、AI討論プラットフォーム「The Council」は、思想を持つエージェント同士の対話を通じて、アイデアを多角的に深化させます。",
    founderMessage7:
      "いずれも、「構想を持つ人間」が主役となる設計です。",
    founderMessage8:
      "まだ言語化されていないアイデア、まだ形になっていない才能を、次のレベルへ引き上げる。そのためのインフラを提供することが、私たちの役割です。",
    founderMessage9:
      "まだ見ぬ創り手が、自らも想像しなかった領域へ到達すること。それこそが、Edge of Visionの使命です。",
    profileKicker: "Profile",
    profileHeading: "代表プロフィール",
    profileBody1:
      "2004年生まれ。慶應義塾大学理工学部システムデザイン工学科在学。",
    profileBody2:
      "学生時代よりソフトウェア開発およびAIを活用したプロダクト開発に取り組む。複数の個人開発プロジェクトを通じて、「人間の発想を拡張するツール」の設計・実装を継続。",
    profileBody3:
      "主なプロジェクトとして、マルチアセットに対応した価格アラートアプリの開発、漫画制作支援ツール「Lyra」、AIエージェントによる討論プラットフォーム「The Council」などを企画・開発。",
    profileBody4:
      "現在は、「0から1を生み出せる人の価値を最大化する」という思想のもと、Edge of Visionを創業。AI時代における創造の在り方を再定義するプロダクトの開発に取り組んでいる。",
    ctaHeading: "私たちの仕事を見る。",
    ctaBody:
      "Edge of Vision が現在取り組んでいるプロダクトを一覧で確認できます。",
    ctaPrimary: "プロダクトハブを開く",
    footerDirectoryTitle: "サイト",
    footerVisionLink: "思想",
    footerLegalLink: "特定商取引法に基づく表記",
    footerContactTitle: "連絡先",
    footerBackTop: "上に戻る",
  },
  en: {
    title: "Edge of Vision",
    description:
      "Edge of Vision aims to extend the limits of individual capability with AI and build a society where people are not constrained by verbal intelligence or specific technical skills.",
    languageToggle: "JP",
    languageToggleAria: "日本語で表示",
    navToggleLabel: "Toggle navigation",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "Cosmic Intelligence",
    heroLede: "Break the limits of human capability with AI.",
    heroCopy:
      "Edge of Vision aims to extend the limits of individual capability with AI and build a society where people are not constrained by verbal intelligence or specific technical skills.",
    heroPrimaryCta: "Explore Products",
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
    product3Link: "Try it",
    productLink: "Product page coming soon",
    founderKicker: "Founder",
    founderHeading: "Message from the Founder",
    founderLead:
      "We provide human augmentation that helps people who can create the first 1 expand that 1 into 100.",
    founderMessage1:
      "That vision is why I founded Edge of Vision.",
    founderMessage2:
      "Generative AI has dramatically improved productivity in creation and development. But the essence has not changed. The first 1, the original concept, perspective, or question, is still created by human beings.",
    founderMessage3:
      "In practice, simply typing \"write an interesting story\" does not produce a great work. But when a clear concept and intent are given, AI can expand them at high resolution and elevate them into output beyond expectation.",
    founderMessage4:
      "The real challenge lies in expanding that 1 into 100. Today, AI use still involves heavy friction: mastering tools, repeated trial and error, and inefficient prompt tuning. As a result, people who should be able to create real value often lose opportunities because of technical barriers.",
    founderMessage5:
      "Edge of Vision removes that friction. Our goal is to create an environment where people can focus on producing the essential 1 at the heart of creation, and maximize the value of that capability.",
    founderMessage6:
      "For example, Lyra, our manga creation support tool, structurally develops stories from the concept stage and enables consistent visual execution. The Council, our AI discussion platform, deepens ideas from multiple angles through dialogue between agents with distinct philosophies.",
    founderMessage7:
      "In every case, the human with the original vision remains the central actor.",
    founderMessage8:
      "Our role is to provide the infrastructure that lifts ideas not yet fully verbalized and talent not yet fully formed to the next level.",
    founderMessage9:
      "Helping unseen creators reach places they themselves did not imagine. That is the mission of Edge of Vision.",
    profileKicker: "Profile",
    profileHeading: "Founder Profile",
    profileBody1:
      "Born in 2004. Currently studying in the Department of System Design Engineering, Faculty of Science and Technology, Keio University.",
    profileBody2:
      "Has been engaged in software development and AI-driven product development since student years. Through multiple independent projects, has continuously designed and implemented tools that expand human imagination.",
    profileBody3:
      "Major projects include a multi-asset price alert app, the manga creation support tool Lyra, and the AI-agent debate platform The Council.",
    profileBody4:
      "Now leading Edge of Vision under the belief that the value of people who can create something from zero to one should be maximized, while building products that redefine creativity in the AI era.",
    ctaHeading: "Explore our work.",
    ctaBody:
      "Browse the products Edge of Vision is actively building today.",
    ctaPrimary: "Open product hub",
    footerDirectoryTitle: "Directory",
    footerVisionLink: "Vision",
    footerLegalLink: "Legal Notice",
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
