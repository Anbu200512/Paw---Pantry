var s = document.createElement('style');
s.textContent = 'body { padding-top: 72px; overflow-x: hidden; } html { overflow-x: hidden; }';
document.head.appendChild(s);

document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var map = {
    'index.html': 'home',
    'home2.html': 'home',
    'shop.html': 'shop',
    'treat-collections.html': 'treat-collections',
    'subscription-boxes.html': 'subscription-boxes',
    'nutrition-guides.html': 'nutrition-guides',
    'ingredient-sourcing.html': 'ingredient-sourcing',
    'about.html': 'about',
    'customer-stories.html': 'customer-stories',
    'contact.html': 'contact',
    'login.html': 'login',
    'signup.html': 'signup'
  };
  loadNavbar(map[path] || 'home');
  loadFooter();
});
