/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLens: "#abfe2c",
        greenLens2: "#96E024",
        darkGreenLens: "#00501e",
        rainbow: "#0E76FD",
        darkGrey: "#131313",
        lightGrey: "#272727",
        blueRainbow: "#2437E0",
        lensLilac: "#D3B6FF",
        lensGrey: "#FCFCFC",
        lensDarkGrey: "#212322",
        button: "#74cdeb",
      },
      fontFamily: {
        space: "Space Grotesk",
        spacebold: "Space Grotesk Bold",
        coop: "Cooper Black",
        npress: "New Press",
        opress: "Old Press Original",
        f25: "F25 Bank Printer",
        shadow: "Londrina Shadow",
        light: "Londrina Light",
        thinlon: "Londrina Thin",
      },
      backgroundColor: {
        "loading-radial": "radial-gradient(#080810 10%, #000001)",
        "loading-radial2": "rgba(26, 159, 183, 0.8)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(56.48% 56.48% at 50% 50%, #153F93 0%, #01215D 100%)",
      },
      screens: {
        digifizzy: "200px",
      },
      keyframes: {
        pulse2: {
          "0%": {
            width: "0px",
            height: "0px",
            boxShadow: "inset 0 0 200px rgba(26, 159, 183, 0.2)",
            border: "1px solid rgba(26, 159, 183, 0.8)",
          },
          "60%": {
            boxShadow: "inset 0 0 200px rgba(26, 159, 183, 0)",
            border: "1px solid rgba(26, 159, 183, 0.1)",
          },
          "90%": { width: "50vmin", height: "50vmin" },
          "100%": {
            borderColor: "black",
            top: "50%",
            left: "50%",
            margin: "0",
          },
        },
      },
      height: {
        mf: "80vw",
        mfh: "47vw",
      },
    },
  },
  plugins: [],
};
