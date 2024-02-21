import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0'
          }, to: {
            opacity: '1',
          }
        },
        fadeInDown: {
          from: {
            transform: 'translateY(-1rem)',
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        fadeIn: 'fadeInDown 0.4s ease',
        fadeInDown: 'fadeInDown 0.9s ease'
      },
      colors: {
        'primary': '#9a8039'
      },
      gridTemplateColumns: {
        'auto': 'auto 1fr'
      }
    },
  },
  plugins: [],
};
export default config;
