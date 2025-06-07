// Example: Simple testimonial carousel (if needed)
document.addEventListener('DOMContentLoaded', () => {
  // Placeholder for future scripts
});

// DevTools detection (optional, based on your previous script)
function isDevToolsOpen() {
  if (window.location.hostname === 'livecodes.io') return false;

  const threshold = 160;
  const start = new Date();

  debugger; // Will pause if devtools open

  const end = new Date();
  return end - start > threshold;
}

setInterval(() => {
  if (isDevToolsOpen()) {
    alert('DevTools detected!');
  }
}, 1000);