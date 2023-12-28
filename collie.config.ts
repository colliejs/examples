import type { BaseConfig } from "@colliejs/core";
import { defaultConfig } from "@colliejs/core";
export const collieConfig = {
  ...defaultConfig,
  breakpoints: [320, 768],
  theme: {
    colors: {
      primary: "#3B82F6",
      white01: "rgba(255,255,255,0.1)",
      gray200: "#E5E7EB",
    },
  },
} as const satisfies BaseConfig;
