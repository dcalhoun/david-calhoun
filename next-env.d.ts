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
