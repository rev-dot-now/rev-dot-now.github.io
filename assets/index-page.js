const SYLLABLE_OCCURRENCE_INTERVAL = 7000
const SYLLABLE_LENGTH_INTERVAL = 12

document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.querySelector('#crosses');

  if (!imageElement) return;

  function toggleImage() {
    const originalSrc = 'assets/crosses.png';
    const glitchSrc = 'assets/crosses-glitch.png';

    setTimeout(() => {
      imageElement.src = glitchSrc;
      setTimeout(() => {
        imageElement.src = originalSrc;
        toggleImage()
      }, SYLLABLE_LENGTH_INTERVAL);
    }, Math.random() * SYLLABLE_OCCURRENCE_INTERVAL); // Random interval up to 5 seconds
  }

  toggleImage();
});