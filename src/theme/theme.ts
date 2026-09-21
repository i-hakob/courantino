export const colors = {
  bg: '#F7F7FB',
  surface: '#FFFFFF',
  border: '#ECECF2',

  text: '#3C3C4E',
  textMuted: '#8C8CA1',
  textFaint: '#B7B7C9',

  primary: '#58CC02',
  primaryDark: '#46A302',
  primaryLight: '#D7FFB8',
  primaryTint: '#EFFFE0',

  secondary: '#1CB0F6',
  secondaryDark: '#1899D6',
  secondaryLight: '#DDF4FF',

  danger: '#FF4B4B',
  dangerDark: '#EA2B2B',
  dangerLight: '#FFE1E1',

  gold: '#FFC800',
  goldDark: '#E8B200',
  goldLight: '#FFF3CC',

  purple: '#CE82FF',
  purpleDark: '#A15CE0',
  purpleLight: '#F3E4FF',

  locked: '#E3E3EA',
  lockedDark: '#C7C7D6',

  white: '#FFFFFF',
};

export const accentPalette = [
  { base: colors.primary, dark: colors.primaryDark, light: colors.primaryLight, tint: colors.primaryTint },
  { base: colors.secondary, dark: colors.secondaryDark, light: colors.secondaryLight, tint: colors.secondaryLight },
  { base: colors.purple, dark: colors.purpleDark, light: colors.purpleLight, tint: colors.purpleLight },
  { base: colors.gold, dark: colors.goldDark, light: colors.goldLight, tint: colors.goldLight },
];

export function accentFor(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return accentPalette[hash % accentPalette.length];
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radii = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
};

export const shadow = {
  card: {
    shadowColor: '#1A1A2E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    shadowColor: '#1A1A2E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  floating: {
    shadowColor: '#1A1A2E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;
