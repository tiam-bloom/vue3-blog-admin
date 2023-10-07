declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

declare module 'naming-style' {
  const naming : {
    sentence: (str: string) => string
    hyphen: (str: string) => string
  }
  export default naming;
}
