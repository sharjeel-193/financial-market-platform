/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#13b9b9',
                    // light: '#3bcfcf',
                    // dark: '#0f9494',
                },
                secondary: {
                    DEFAULT: '#ffa500',
                    // light: '#ffb733',
                    // dark: '#cc8400',
                },
                background: {
                    light: '#ffffff', // Light background
                    dark: '#1a1a1a',  // Dark background
                },
                text: {
                light: '#000000', // Light text
                dark: '#ffffff',  // Dark text
                },
            }
        },
    },
    plugins: [],
};
