module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        // using custom responsive breakpoints (not tailwind default)

        screens: {
            'mobile-sm': {
                'max': "480px"
            },

            // 0 to n pixels (n is the breakpoint number)

            'mobile-lg': {
                'max': "768px"
            },
            'tablet': {
                'max': "1024px"
            },

            // range of widths for the screen sizes

            '_mobile-lg': {
                'min': "481px",
                'max': "768px"
            },
            '_tablet': {
                'min': "769px",
                'max': "1024px"
            },
            '_desktop-sm': {
                'min': "1025px",
                'max': "1280px"
            }
        },
        extend: {},
    },
    plugins: [],
}
