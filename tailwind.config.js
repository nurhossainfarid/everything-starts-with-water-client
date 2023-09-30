/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#2A99FF',
          secondary: "#9333ea",
          accent: "#ec4899",
          neutral: "#e5e7eb",
          "base-100": "#ffffff",
          button: '#0085FA'
        },
      },
      "white",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}

