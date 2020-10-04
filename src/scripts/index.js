import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.navbar__hamburger'),
  drawer: document.querySelector('.navbar__links2'),
  content: document.querySelector('#mainContent'),
  navbar: document.querySelector('.navbar'),
  skipToContent: document.querySelector('.navbar__skipToContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
