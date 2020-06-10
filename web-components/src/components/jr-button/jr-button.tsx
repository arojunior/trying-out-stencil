import { Component, Prop, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'jr-button',
  styleUrl: 'jr-button.css',
  shadow: true,
})
export class JrButton implements ComponentInterface {

  @Prop() variant: 'primary' | 'warning' =  'primary';

  render() {
    return (
      <button class={this.variant}>
        <slot></slot>
      </button>
    );
  }

}
