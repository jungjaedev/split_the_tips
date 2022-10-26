import 'styled-components';

declare module 'styled-components' {
   // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    color: {
      white: string,
      black: string,
    },
    fonts: {
      normal: string,
    }
  };
}