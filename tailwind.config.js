/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    },
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      theme: {
        DEFAULT: "hsl(var(--theme))",
        dark: "hsl(var(--theme-dark))",
        light: "hsl(var(--theme-light))",
      },
      alter: "hsl(var(--alter))",
    }
  },
  plugins: [],
}

