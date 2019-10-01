import { Component, Element, h, Prop } from '@stencil/core';

// custom imports
import Tunnel from '../component-container/data/data';

@Component({
  tag: 'component-item',
  styleUrl: 'component-item.css',
  shadow: true
})
export class ComponentItem {

  @Element() el: HTMLElement;  


  @Prop() add: (el: HTMLElement) => void;


  componentDidLoad() {

    this.add(this.el);
  }

  
  render() {

   return (
      <slot></slot>
    );
  }
}


Tunnel.injectProps(ComponentItem, ['add']);