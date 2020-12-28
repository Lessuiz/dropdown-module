exports.createDropdowns = function () {
  const dropdownButtons = document.querySelectorAll('.drop-down');
  const navs = document.querySelectorAll('.nav-drop');

  navs.forEach((nav) => {
    nav.position = 'absolute';
    nav.hidden = true;
  });

  dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dropdownNav = button.querySelector('.nav-drop');
      dropdownNav.hidden = !dropdownNav.hidden;
    });
  });
};