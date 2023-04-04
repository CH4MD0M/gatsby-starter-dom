import 'styled-components';

type StringTypes = {
  [key: string]: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: StringTypes;
    responsive: StringTypes;
    maxWidth: string;
  }
}
