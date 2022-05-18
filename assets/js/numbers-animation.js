export default function initNumbersAnimation() {
  function numbersAnimation() {
    const numbers = document.querySelectorAll('[data-number]');
    numbers.forEach((number) => {
      const total = +number.innerText;
      let start = 0;
      const increment = Math.round(total / 100);
    
      const timer = setInterval(() => {
        start = start + increment;
        number.innerText = start;
        if(start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  
  function handleMutation(mutation) {
   if(mutation[0].target.classList.contains('animate')) {
      observer.disconnect();
      numbersAnimation();
    }
  }
  
  const observerTarget = document.querySelector('.number');
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {attributes: true});
}
