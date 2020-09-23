const DrawerInitiator = {
  init({button, drawer, content}) {
    button.addEventListener('click', () => {
      button.classList.toggle('open');
      drawer.classList.toggle('show');
    });
  },
};

export default DrawerInitiator;
