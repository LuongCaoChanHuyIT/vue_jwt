/// <reference types="vite/client" />
import type * as BootstrapTypes from 'bootstrap';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'morris.js';
declare module 'raphael';

declare global {
  interface Window {
    bootstrap: typeof BootstrapTypes;
    $: any;
    jQuery: any;
  }
}

export {};
