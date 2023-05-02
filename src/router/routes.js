import { Router } from '@vaadin/router';

export const routes = [
  { path: '/home', component: 'home-page' },
  { path: '/game', component: 'game-page' },
  { path: '(.*)', component: 'home-page' }
];

const router = new Router(document.querySelector('game-paper-lit'));
router.setRoutes(routes);
