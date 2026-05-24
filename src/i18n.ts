import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home.hero.theLiving": "The Living",
      "home.hero.architecture": "Architecture",
      "home.hero.deck": "Fast, resilient, operator-first web experiences",
      "home.hero.cta.book": "Book System Audit",
      "home.hero.cta.work": "See the work",
      "home.chapter1.eyebrow": "Chapter I · Services",
      "home.chapter1.accent": "three pillars",
      "home.chapter1.title": "Three things. ",
      "home.chapter1.titleEm": "Done well.",
      "home.chapter1.deck": "The full lifecycle of a website or web product. Build the foundation, launch the growth, maintain the living system.",
      "home.chapter1.readMore": "Read more ",
      "home.chapter2.eyebrow": "Chapter II · The work",
      "home.chapter2.accent": "what I've built",
      "home.chapter2.title": "What I've ",
      "home.chapter2.titleEm": "shipped.",
      "home.chapter2.deck": "A small set, growing slowly. Better two real than ten placeholders.",
      "home.about.badge": "EST. 2026",
      "home.about.eyebrow": "The Studio · Siddh Patel",
      "home.about.title": "I build digital ",
      "home.about.titleEm": "foundations.",
      "home.about.cta": "Read the manifesto ",
      "home.chapter3.eyebrow": "Chapter III · The process",
      "home.chapter3.accent": "how I work",
      "home.chapter3.title": "Three steps. ",
      "home.chapter3.titleEm": "No surprises.",
      "home.chapter3.learnMore": "Learn more "
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
