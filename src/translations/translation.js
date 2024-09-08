import { I18n } from "i18n-js";

export const trans = new I18n({
  ru: {
    hello: "Привет!",
  },
  ro: {
    hello: "Olá!",
  },
  en: {
    hello: "Hello!",
  },
});

trans.defaultLocale = "ru";
