// Function to toggle the data-theme attribute based on the browser's color scheme
function toggleThemeBasedOnPreference() {
  const bodyElement = document.querySelector('body');
  if (!bodyElement) {
      console.error('Element with class body not found.');
      return;
  }

  // Check if the browser prefers dark mode
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Toggle the data-theme attribute
  if (prefersDarkScheme) {
      bodyElement.setAttribute('data-theme', 'dark');
  } else {
      bodyElement.setAttribute('data-theme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Call the function to set the initial theme
  toggleThemeBasedOnPreference();
});

// Add an event listener to detect changes in the color scheme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleThemeBasedOnPreference);