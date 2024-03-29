/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ComponentContainer {}
  interface ComponentItem {
    'add': (el: HTMLElement) => void;
  }
}

declare global {


  interface HTMLComponentContainerElement extends Components.ComponentContainer, HTMLStencilElement {}
  var HTMLComponentContainerElement: {
    prototype: HTMLComponentContainerElement;
    new (): HTMLComponentContainerElement;
  };

  interface HTMLComponentItemElement extends Components.ComponentItem, HTMLStencilElement {}
  var HTMLComponentItemElement: {
    prototype: HTMLComponentItemElement;
    new (): HTMLComponentItemElement;
  };
  interface HTMLElementTagNameMap {
    'component-container': HTMLComponentContainerElement;
    'component-item': HTMLComponentItemElement;
  }
}

declare namespace LocalJSX {
  interface ComponentContainer extends JSXBase.HTMLAttributes<HTMLComponentContainerElement> {}
  interface ComponentItem extends JSXBase.HTMLAttributes<HTMLComponentItemElement> {
    'add'?: (el: HTMLElement) => void;
  }

  interface IntrinsicElements {
    'component-container': ComponentContainer;
    'component-item': ComponentItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


