module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg:{
        DEFAULT: '#141414',
        700: "#0a0a0a"
      },
      text:{
        DEFAULT: "#FFFFFF"
      },
      primary:{
        DEFAULT: '#b9090b'
      },
      gray:{
        DEFAULT:"#CFCFCF"
      },
      transparent:'#00000000'
    },
    extend: {},
  },
  plugins: [],
}
