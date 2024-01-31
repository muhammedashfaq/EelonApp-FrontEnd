import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors:{
        "dark-purple" :"#081A51",
        "light-white" :"rgba(255,255,255 0.18)"
      }
    },
  },
  plugins: [],
});