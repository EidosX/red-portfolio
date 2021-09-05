import { writable } from "svelte/store";
import { langEn } from "./lang-en";

export const lang = writable(langEn);

export interface Lang {
  navbar: {
    skills: string;
    projects: string;
    contactMe: string;
  };
  typewriterHeadlines: string[];
}
