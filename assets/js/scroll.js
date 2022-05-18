export default function initScroll() {
  /* Debounce do Lodash */
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const targets =  document.querySelectorAll('[data-anime]');
  if(targets.length) {
    const windowHalf = window.innerHeight * 0.85;
    
    function activeScroll() {
      targets.forEach((target) => {
        const sectionTop = target.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if (isSectionVisible) {
          target.classList.add('animate');
        };
      });
    }
    activeScroll() 
    window.addEventListener('scroll', debounce(activeScroll, 200));
  }
}
