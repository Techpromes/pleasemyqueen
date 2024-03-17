// Create floating hearts
function createHearts() {
    const body = document.querySelector('body');
    const numHearts = 10; // Adjust the number of hearts as desired
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      body.appendChild(heart);
    }
  }
  
  // Call the createHearts function on page load
  window.addEventListener('load', createHearts);