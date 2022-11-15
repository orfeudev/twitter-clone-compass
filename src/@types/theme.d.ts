import 'styled-components';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  changeTheme: (theme: Theme) => void;
};

export interface IThemeColors {
  primary: string;
  secondary: string;
  search: string;
  white: string;
  gray: string;
  outline: string;
  retweet: string;
  like: string;
  twitter: string;
  twitterDarkHover: string;
  twitterLightHover: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
  }
}
