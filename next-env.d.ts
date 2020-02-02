/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "babel-plugin-preval/macro" {
  declare function preval<T>(
    template: TemplaTemplateStringsArray,
    ...substitutions: any[]
  ): T;

  export = preval;
}

declare module "lazysizes";

declare namespace twttr {
  let widgets: {
    createShareButton(
      href: string,
      element: HTMLElement,
      options: {
        dnt?: boolean;
        hashtags?: string;
        lang?: string;
        related?: string;
        size?: string;
        text?: string;
        via?: string;
      }
    ): Promise<void>;
  };
}
