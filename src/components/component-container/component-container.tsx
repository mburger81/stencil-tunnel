import { Component, h } from '@stencil/core';

// custom imports
import Tunnel from './data/data';

@Component({
  tag: 'component-container',
  styleUrl: 'component-container.css',
  shadow: true
})
export class ComponentContainer {

  private add = (element: HTMLElement) => {
    console.log('xxxxxxxxxxxxxxxxxxx');
    console.log('add', element);
    console.log('xxxxxxxxxxxxxxxxxxx');
  }
  
  render() {
    // console.log('Masonryrender');

    const tunnelState = {
      add: this.add
    };



   return (
      <Tunnel.Provider state={tunnelState}>
        <div>Hello, World!</div>
      </Tunnel.Provider>
    );
  }
}
