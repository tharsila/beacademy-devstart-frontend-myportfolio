export default function initMenuMobile() {
  const menuHamburger = document.getElementById('menu-mobile');
  const menuList = document.getElementById('menu-list');
  const events = ['click', 'touchstart'];
  
  function handleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
  
    menuList.classList.toggle('active');
    menuHamburger.classList.toggle('fa-times');
    
    window.addEventListener('scroll', () => {
      menuList.classList.remove('active');
    menuHamburger.classList.remove('fa-times');
    })
  }

  events.forEach((event) => {
    menuHamburger.addEventListener(event, handleMenu);
  })
}
