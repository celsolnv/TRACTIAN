import "styled-components";

declare module "styled-componets" {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      text: string;
      green: string;
    };
  }
}
