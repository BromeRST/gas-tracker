import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            boxShadow: {
                medium: "0px 2px 2px 0px rgba(0, 0, 0, 0.15)",
                strong: "0px 7.057px 17.642px 0px rgba(0, 0, 0, 0.35)",
            },
            colors: {
                white: "var(--color-theme-white)",
                black: "var(--color-theme-black)",
            },
        },
    },
    plugins: [],
};
export default config;
