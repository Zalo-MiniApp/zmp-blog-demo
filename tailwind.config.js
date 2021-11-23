const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        red: "#EB4C42",
        "blue-dark-text": "#2D4379",
        "blue-dark": "#0D253C",
        blue: "#376AED",
        cyan: "#8FE6FF",
        "gray-dark": "#7B8BB2",
        gray: "#D7DDEC",
        pink: "#FF3743",
      },
      boxShadow: {
        1: "0px -3px 20px rgba(45, 45, 45, 0.141444)",
        2: "0px 16px 32px rgba(13, 37, 60, 0.44)",
        3: " 0px 10px 15px rgba(82, 130, 255, 0.06)",
      },
    },
  },
}
