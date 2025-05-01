document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.querySelector('#crosses');

  if (!imageElement) return;

  function toggleImage() {
    const originalSrc = 'assets/crosses.png';
    const glitchSrc = 'assets/crosses-glitch.png';

    setTimeout(() => {
      console.log('test')
      imageElement.src = glitchSrc;
      setTimeout(() => {
        imageElement.src = originalSrc;
        toggleImage()
      }, 100);
    }, Math.random() * 3000); // Random interval up to 5 seconds
  }

  toggleImage();
});