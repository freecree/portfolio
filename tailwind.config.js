export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: 'Raleway',
      title: 'IBM Plex Mono'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xxsm: '350px',
      xsm: '470px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      dark: '#1C0425',
      white: 'var(--color-white)',
      grad: 'var(--color-grad)',
      bg_light1: '#88DFFA',
      bg_light2: '#E36DF6',
      blue: '#3B78ED',
      pink: '#FC33E8',
      accent: '#AC0DF7',
    },
    extend: {
      backgroundImage: {
        angle_b: "url('./assets/icon_angle_b.svg')",
      },
    },
  },
  plugins: [],
};
