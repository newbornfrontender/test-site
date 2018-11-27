import { a as updateMetadata } from './chunk-09144383.js';

class MyView404 extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
      <h1>Page not found</h1>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    updateMetadata({
      title: 'Page not found',
    });
  }
}

customElements.define('my-view-404', MyView404);
