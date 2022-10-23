import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      text: string;
      green: string;
      "tw-gradient-to": string;
      "tw-gradient-from": string;
    };
  }
}
