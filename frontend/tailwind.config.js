/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  
  theme: {
    extend: {
      colors : {
        yell : "#FACF123" ,
        bg : "#FFFFFF" ,
        gallery : "#FBFFF5",
        profile : "#FFF9DE",
       } ,

       fontFamily : {
        Spartan : ['Spartan'],
       }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

