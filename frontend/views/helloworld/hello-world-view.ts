import '!style-loader!css-loader!./hello-world-view.css';
import { showNotification } from '@vaadin/flow-frontend/a-notification';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';
import { customElement, html } from 'lit-element';
import { View } from '../../views/view';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  name: string = '';

  render() {
    return html`
      <p>Resize the window to see the icon labels in the top menu appear and disappear.</p>
      <p>Click at the menu items and check the browser console to see which item was selected</p> 
    `;
  }
  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  sayHello() {
    showNotification('Hello ' + this.name);
  }
}
