module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {

            sm: { min: "320px", max: "768px" },
            ip12: { min: "350px", max: "450px" },
            s390:{min:"300px", max:"450px"},
            btndemo: { min: "500px", max: "768px" },
            s650: { min: "650px", max: "768px" },

            // => @media (min-width: 640px and max-width: 767px) { ... }
            menufix: { min: "750px", max: "860px" },

            md: { min: "769px", max: "1024px" },
            s976: { min: "976px", max: "1050px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            lg: { min: "1025px" },
            lgs: { min: "1240px" },
        },
    },
    plugins: [],
};
