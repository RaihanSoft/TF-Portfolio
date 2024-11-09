module.exports = {
  content: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Add any paths that use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'prime': '##000000/10', // Example of custom color
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #F5BD4D, #F89222)', 
      },
    },
  },
  plugins: [],
};
