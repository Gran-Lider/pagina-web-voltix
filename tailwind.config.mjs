/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'voltix-marino': '#002B4D',
        'voltix-gris-claro': '#F2F2F2',
      },
    },
  },
  plugins: [],
};