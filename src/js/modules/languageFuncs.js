const languageSwitch = (lang) => localStorage.setItem("lang", lang);

const getCurrentLang = () => localStorage.getItem("lang") || "en";

export { languageSwitch, getCurrentLang };
