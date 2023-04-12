import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { themeVars } from './theme.css';

const spaces = {
  0: '0',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
};

export const spaceProperties = defineProperties({
  properties: {
    margin: spaces,
    marginTop: spaces,
    marginRight: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    padding: spaces,
    paddingTop: spaces,
    paddingRight: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
  },
  shorthands: {
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
  },
});

export const colorProperties = defineProperties({
  properties: {
    backgroundColor: themeVars.backgroundColors,
    color: themeVars.textColors,
  },
});

export const sprinkles = createSprinkles(spaceProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
