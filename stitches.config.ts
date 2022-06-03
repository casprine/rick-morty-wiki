import { createStitches } from '@stitches/react';

export const { globalCss, styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      blue: '#0369a1',
      borderColor: '#e5e7eb',
      greenLight: '#86efac',
      green: '#166534',
      redLight: '#fca5a5',
      red: '#991b1b',
      grayLight: '#d4d4d8',
      gray: '#27272a',
      gray600: '#6b7280',
      black: '$18181b',
    },
  },
});

export const globalStyles = globalCss({
  '*': { boxSizing: 'border-box', fontSize: '2rem', margin: 0 },
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: '62.5%',
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    margin: '0',
    padding: '0',
    scrollBehavior: 'smooth',
    fontSize: '2rem',
    minHeight: '100vh',
    color: '$gray',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont,\n    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",\n    sans-serif',
  },
  main: { display: 'block' },
  h1: { fontSize: '2em', margin: '0.67em 0' },
  hr: { boxSizing: 'content-box', height: '0', overflow: 'visible' },
  p: { margin: '0' },
  a: {
    textDecoration: 'inherit',
    backgroundColor: 'transparent',
  },
  pre: {
    border: '4px solid #48bb78',
    padding: '10px',
    borderRadius: '4px',
  },
  'abbr[title]': {
    borderBottom: 'none',
    // @ts-ignore
    textDecoration: ['underline', 'underline dotted'],
  },
  'b,\nstrong': { fontWeight: 'bolder' },
  'code,\nkbd,\nsamp': {
    fontFamily: '"Monaco", monospace, monospace',
    fontSize: '0.8em',
  },
  small: { fontSize: '80%' },
  'sub,\nsup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: { bottom: '-0.25em' },
  sup: { top: '-0.5em' },
  img: { borderStyle: 'none' },
  'button,\ninput,\noptgroup,\nselect,\ntextarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: '0',
  },
  'button,\ninput': { overflow: 'visible' },
  'button,\nselect': { textTransform: 'none' },
  'button,\n[type="button"],\n[type="reset"],\n[type="submit"]': {
    WebkitAppearance: 'button',
  },
  'button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: '0',
    },
  fieldset: { padding: '0.35em 0.75em 0.625em' },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal',
  },
  progress: { verticalAlign: 'baseline' },
  textarea: { overflow: 'auto' },
  '[type="checkbox"],\n[type="radio"]': {
    boxSizing: 'border-box',
    padding: '0',
  },
  '[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
  '[type="search"]::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  details: { display: 'block' },
  summary: { display: 'list-item' },
  template: { display: 'none' },
  '[hidden]': { display: 'none' },
  '.flex': { display: 'flex' },

  '.modal': {
    display: 'block',
    position: 'fixed',
    zIndex: 1,
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',

    '.content': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  },

  '@keyframes lds-roller': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});
