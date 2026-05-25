import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home.hero.theLiving": "Operational",
      "home.hero.architecture": "Systems",
      "home.hero.deck": "SVYNE helps service businesses replace spreadsheets, phone calls, and disconnected tools with one workflow-fit operating system",
      "home.hero.cta.book": "Book a system audit",
      "home.hero.cta.work": "See outcomes",
      "home.chapter1.eyebrow": "Operational stack",
      "home.chapter1.accent": "what gets replaced",
      "home.chapter1.title": "From scattered work. ",
      "home.chapter1.titleEm": "To one system.",
      "home.chapter1.deck": "General contractors, repair shops, and service teams do not need another generic tool. They need the daily workflow mapped, cleaned up, and connected.",
      "home.chapter1.readMore": "Read more ",
      "home.chapter2.eyebrow": "Outcome preview",
      "home.chapter2.accent": "manual work removed",
      "home.chapter2.title": "Systems that ",
      "home.chapter2.titleEm": "change operations.",
      "home.chapter2.deck": "A focused set of workflow systems. The point is not more software adoption. The point is fewer missed steps, faster work, and better owner visibility.",
      "home.about.badge": "EST. 2026",
      "home.about.eyebrow": "The operator · Siddh Patel",
      "home.about.title": "Built around ",
      "home.about.titleEm": "how work happens.",
      "home.about.cta": "Read the manifesto ",
      "home.chapter3.eyebrow": "Process",
      "home.chapter3.accent": "map, build, support",
      "home.chapter3.title": "A system before ",
      "home.chapter3.titleEm": "software.",
      "home.chapter3.learnMore": "Learn more ",
      "ctaBand.kicker": "Ready to simplify operations",
      "ctaBand.deck": "Tell SVYNE where the workflow is breaking down. I reply within one business day.",
      "ctaBand.btn.audit": "Book a system audit",
      "ctaBand.btn.pricing": "See pricing"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
