import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '100px',
      'ipad': '768px',
      'Tablet': '1024px',
      'Laptop': '1280px',
    },

    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
      },
      backgroundImage: {
        'student': "url('./src/assets/student.svg')",
        'teacher': "url('./src/assets/teacher-selected.svg')",
      },
      
    },
  },
  plugins: [],
});
