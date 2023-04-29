import { Router } from '@vaadin/router';

export const routes = [
  { path: '/', component: 'home-page' },
  { path: '/', component: 'game-page' }
];

const router = new Router(document.querySelector('game-paper-lit'));
router.setRoutes(routes);
