/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      '2xs': '0.4rem',
      xs: '0.6rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.3rem',
      xl: '1.5rem',
      "2xl": '1.75rem',
      '3xl': '2.2rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#231F20",
        accent: {
          primary: "#1A3A88",
          secondary: "#FF6E1E",
          pink: "#F28D99",
          green: "#48B0C6",
          yellow: "#FCDF6A",
        }
      },
      fontFamily:{
        main: ["main-font"],
        secondary: ["secondary-font"],
        chinese: ["chinese-main-font"],
        chineseSecondary: ["chinese-secondary-font"],
      },
      borderRadius: {
        "4xl": "2.5rem",
        '5xl': '3rem',
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #A63A50 -80%, #B0545F -10%, #ED929A 45%, #84A59D 200%)",
        "secondary-gradient": "linear-gradient(90deg, #A63A50 0%, #B0545F 23%, #ED929A 45%, #84A59D 100%)",

        "red-card-gradient": "linear-gradient(0deg, #A63A50 5%,  #FFFFFF00 100%)",
        "green-card-gradient": "linear-gradient(0deg, #84A59D 5%, #FFFFFF00 100%)",
        "yellow-card-gradient": "linear-gradient(0deg, #F6BD60 0%, #FFFFFF00 100%)",
        "blue-card-gradient": "linear-gradient(0deg, #1A3A88 0%, #FFFFFF00 100%)",
        "orange-card-gradient": "linear-gradient(0deg, #FF6E1E 0%, #FFFFFF00 100%)",



        "pattern": "url('./assets/images/HeroSectionBackground.png')",
        "buttonVector": "url('./assets/images/buttonVector.png')",
        "buttonVectorWhite": "url('./assets/images/buttonVectorWhite.png')",
        "navImage-bg": "url('./assets//images/auth/authImage.png')",
      },
      boxShadow: {
        primary: "0px 4px 25px 2px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

      
