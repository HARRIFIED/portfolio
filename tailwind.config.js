/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#43D9AD',
        primary2: '#011627',
        primary3: '#011221',
        secondaryAsh: '#607B96',
        secondaryGreen: '#3C9D93',
        secondaryBlue: '#4D5BCE',
        secondaryWhite: '#FFFFFF',
        accentYellow: '#FEA55F',
        accentGreen: '#43D9AD',
        accentRed: '#E99287',
        accentPurple: '#C98BDF',
        lines: '#1E2D3D',
        gradientBlue: '#4D5BCE',
        gradientGreen: '#43D9AD'
      }
    },
  },
  plugins: [],
}
