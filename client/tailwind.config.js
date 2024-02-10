import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
      
        // "primary-blue": "#3498db",
        // "success-green": "#2ecc71",
        // "warning-yellow": "#f39c12",
        // "error-red": "#e74c3c",
        // "deep-pink": "#e91e63",
        // "teal": "#009688",
        // "indigo": "#3f51b5",
        // "amber": "#ffc107",
        // "deep-orange": "#ff5722",
        // "lime": "#cddc39",
        // "cyan": "#00bcd4",
        // "purple": "#9c27b0",
        // "light-blue": "#03a9f4",
        // "pink": "#e91e63",
        // "brown": "#795548",
        // "grey": "#9e9e9e",
        // "blue-grey": "#607d8b",
        // "orange": "#ff9800",
      },
      backgroundImage: {
        'student': "url('./src/assets/student.svg')",
        'teacher': "url('./src/assets/teacher-selected.svg')",
      }
    },
  },
  plugins: [],
});
