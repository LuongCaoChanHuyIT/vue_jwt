/// <reference types="vite/client" />
import type * as BootstrapTypes from 'bootstrap';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export {};
