import '../pages/homePage.js';
import '../pages/gamePage.js';

export const routes = [
  { path: '/', component: 'home-page' },
  { path: '/home', component: 'home-page' },
  { path: '/game', component: 'game-page' },
  { path: '(.*)', component: 'home-page' }
];
