// Function to load HTML components
async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${componentPath}:`, error);
  }
}

// Load header and footer when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Load header
  loadComponent('header-container', '/components/header.html');
  
  // Load footer
  loadComponent('footer-container', '/components/footer.html');
}); 