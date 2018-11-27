import {Router} from 'https://unpkg.com/@vaadin/router';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

class HomeView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Welcome home!</h1>`;
  }
}
customElements.define('home-view', HomeView);

class NotFoundView extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Page not found</h1>
      The pathname was: ${this.location.pathname}
    `;
  }
}
customElements.define('not-found-view', NotFoundView);

router.setRoutes([
  {path: '/', component: 'home-view'},
]);

router.setRoutes([
  ...router.getRoutes(),
  {path: '(.*)', component: 'not-found-view'}
]);
