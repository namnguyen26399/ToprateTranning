module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: { min: "320px", max: "768px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            menufix: { min: "750px",max:"860px" },

            md: { min: "769px", max: "1024px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            lg: { min: "1025px" },
            lgs: { min: "1240px" },
        },
    },
    plugins: [],
};
