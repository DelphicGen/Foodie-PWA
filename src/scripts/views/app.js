/* eslint-disable require-jsdoc */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({button, drawer, content, navbar, skipToContent}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navbar = navbar;
    this._skipToContent = skipToContent,
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    // kita bisa menginisiasikan komponen lain bila ada
  }

  scrollEvent() {
    return () => {
      if (window.scrollY > 0) {
        this._navbar.classList.add('scrolled');
        this._skipToContent.classList.add('scrolled--2');
      } else {
        this._navbar.classList.remove('scrolled');
        this._skipToContent.classList.remove('scrolled--2');
      }
    };
  }

  setNavbarAndSkipToContent(url) {
    if (url === '/home' || url === '/' || url === '/restaurants') {
      window.addEventListener('scroll', this.scrollEvent);
    } else {
      window.removeEventListener('scroll', this.scrollEvent);
      this._navbar.classList.add('scrolled');
      this._skipToContent.classList.add('scrolled--2');
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (page) {
      this.setNavbarAndSkipToContent(url);
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
  }
}

export default App;
