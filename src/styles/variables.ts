// ==================================================
// Variables
//
// 1. Spaces
// 2. Colors
// 3. zIndex
// 4. Misc
// ==================================================

// --------------------------------------------------
// 1. Spaces
// --------------------------------------------------

export const Space = {
  xxs: `.4rem`,
  xs: `.8rem`,
  sm: `1.6rem`,
  default: `2.4rem`,
  md: `3.2rem`,
  lg: `4.8rem`,
  xlg: `6.4rem`,
  xxlg: `9.6rem`,
}

export const Height = {
  headerSm: `${Space.lg}`,
  headerLg: `${Space.xlg}`,
  footer: `4rem`,
  mainTop: `${Space.md}`,
}

// --------------------------------------------------
// 2. Colors
// --------------------------------------------------

export const Color = {
  white: '#FFFEF7',
  secondaryWhite: '#FFFCE5',
  tertiaryWhite: '#FAF7E1',
  quaternaryWhite: '#FAF5D4',

  black: '#0F0F0F',
  secondaryBlack: '#1A1A18',
  tertiaryBlack: '#1D1D1D',
  quaternaryBlack: '#212121',

  whiteSolid: '#ffffff',
  blackSolid: '#000000',
  blue: `#187888`,
  blueLight: `#a1ecf7`,
  grayDarker: `#1d1d1d`,
  grayDark: `#2d2d2d`,
  gray: `#757575`,
  grayLight: `#aaaaaa`,
  grayLighter: `#efefef`,
  grayWhite: `#f1f1f1`,
  yellow: `#e6af05`,
  purple: '#aa52cc',
}

export const Transition = {
  default: `0.5s`,
}

export const BorderRadius = {
  box: `5px`,
}

export const Border = {
  box: `1px solid var(--borderColor)`,
  default: `1px solid var(--borderColor)`,
}

export const BoxShadow = {
  box: `0 1px 3px var(--boxShadow)`,
}

export const MaxSize = {
  md: `750px`,
  lg: `1080px`,
}
