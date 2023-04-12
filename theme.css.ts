import { createTheme } from '@vanilla-extract/css';

export const [themeClass, themeVars] = createTheme({
  backgroundColors: {
    primary: 'white',
    secondary: 'lightgray',
    brand: 'purple',
    good: 'lightgreen',
    bad: 'lightred',
  },
  textColors: {
    default: 'black',
    secondary: 'gray',
    brand: 'purple',
    good: 'green',
    bad: 'red',
  },
});
