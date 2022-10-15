module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "card-animation": "card-animation 1s ease-in-out infinite alternate",
        "flip-container": "flip-container 1s ease-in-out infinite alternate",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
