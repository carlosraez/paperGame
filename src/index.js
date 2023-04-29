import { Router } from '@vaadin/router';
import { routes } from './router/routes.js';
import './pages/homePage.js';
import './pages/gamePage.js';

const router = new Router(document.querySelector('game-paper-lit'));
router.setRoutes(routes);
