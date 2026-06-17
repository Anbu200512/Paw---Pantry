function loadNavbar(currentPage) {
  var isDark = document.documentElement.classList.contains('dark');
  var isRtl = document.documentElement.dir === 'rtl';
  var pages = [
    { name: 'About', href: 'about.html', id: 'about' },
    { name: 'Shop', href: 'shop.html', id: 'shop' },
    { name: 'Treat ', href: 'treat-collections.html', id: 'treat-collections' },
    { name: 'Nutrition ', href: 'nutrition-guides.html', id: 'nutrition-guides' },
    { name: 'Ingredient ', href: 'ingredient-sourcing.html', id: 'ingredient-sourcing' },
    { name: 'Contact', href: 'contact.html', id: 'contact' }
  ];

  var isAuthPage = currentPage === 'login' || currentPage === 'signup';

  var logoHtml =
    '<a href="index.html" class="flex items-center gap-3 no-underline shrink-0 group">' +
      '<i class="fas fa-paw text-[var(--primary)] text-3xl"></i>' +
      '<span class="text-2xl font-black tracking-tight">' +
        '<span class="text-[var(--primary)]">Paw</span> <span class="text-[var(--accent)]">Pantry</span>' +
      '</span>' +
    '</a>';

  var themeDirHtml =
    '<button data-toggle="theme" class="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text)] hover:bg-[var(--surface-hover)] transition-all text-base" title="Toggle theme">' +
      '<i class="fa-solid ' + (isDark ? 'fa-sun' : 'fa-moon') + '"></i>' +
    '</button>' +
    '<button data-toggle="dir" class="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text)] hover:bg-[var(--surface-hover)] transition-all text-xs" title="Toggle direction">' +
      '<i class="fa-solid fa-arrow-right-arrow-left"></i>' +
    '</button>';

  var html;
  if (isAuthPage) {
    html =
      '<header class="fixed top-0 left-0 w-full bg-[var(--surface)] shadow-sm z-[100]">' +
        '<div class="max-w-[1280px] mx-auto px-4 md:px-6">' +
          '<div class="flex items-center justify-between h-16">' +
            logoHtml +
            '<div class="flex items-center gap-2 shrink-0">' +
              themeDirHtml +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>';
  } else {
    html =
      '<header class="fixed top-0 left-0 w-full bg-[var(--surface)] shadow-sm z-[100]">' +
        '<div class="max-w-[1280px] mx-auto px-4 md:px-6">' +
          '<div class="flex items-center justify-between h-16">' +
            logoHtml +
            '<nav class="hidden lg:flex items-center gap-1">' +
              '<div class="relative group">' +
                '<a href="#" class="relative px-3 xl:px-4 py-2 text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--primary)] transition-all flex items-center gap-1' +
                  (currentPage === 'home' ? ' text-[var(--primary)] font-bold' : '') +
                  '">Home <i class="fa-solid fa-chevron-down text-xs"></i>' +
                  (currentPage === 'home' ? '<span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[var(--accent)] rounded-full"></span>' : '') +
                '</a>' +
                '<div class="absolute top-full left-0 mt-1 bg-[var(--surface)] shadow-lg rounded-xl border border-[var(--border)] py-2 min-w-[160px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">' +
                  '<a href="index.html" class="block px-4 py-2 text-sm text-[var(--text)] no-underline hover:bg-[var(--surface-hover)] hover:text-[var(--primary)] transition-all">Home 1</a>' +
                  '<a href="home2.html" class="block px-4 py-2 text-sm text-[var(--text)] no-underline hover:bg-[var(--surface-hover)] hover:text-[var(--primary)] transition-all">Home 2</a>' +
                '</div>' +
              '</div>' +
              (function () {
                var navHtml = '';
                for (var i = 0; i < pages.length; i++) {
                  var p = pages[i];
                  navHtml += '<a href="' + p.href + '" class="relative px-3 xl:px-4 py-2 text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--primary)] transition-all' +
                    (p.id === currentPage ? ' text-[var(--primary)] font-bold' : '') +
                    '">' + p.name +
                    (p.id === currentPage ? '<span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[var(--accent)] rounded-full"></span>' : '') +
                    '</a>';
                }
                return navHtml;
              })() +
            '</nav>' +
            '<div class="hidden lg:flex items-center gap-2 shrink-0">' +
              themeDirHtml +
              '<a href="login.html" class="px-5 py-2 text-sm font-semibold text-[var(--primary)] no-underline border-2 border-[var(--primary)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all">Login</a>' +
              '<a href="signup.html" class="px-5 py-2 text-sm font-semibold text-white no-underline bg-[var(--accent)] rounded-full hover:bg-[var(--accent-hover)] transition-all">Sign Up</a>' +
            '</div>' +
            '<button id="mobileMenuBtn" class="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--text)] hover:bg-[var(--surface-active)] transition-all" aria-label="Toggle navigation menu" aria-controls="mobileMenu" aria-expanded="false">' +
              '<i id="mobileMenuIcon" class="fa-solid fa-bars text-lg"></i>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div id="mobileMenu" class="lg:hidden max-h-0 opacity-0 invisible overflow-hidden bg-[var(--surface)] border-t border-[var(--border-muted)] transition-all duration-300 ease-in-out" aria-hidden="true">' +
          '<div class="px-4 pb-4 pt-2">' +
            '<div class="flex flex-col gap-1">' +
              '<div>' +
                '<button class="mobile-sub-toggle w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[var(--text)] no-underline rounded-xl hover:bg-[var(--surface-hover)] transition-all' +
                  (currentPage === 'home' ? ' text-[var(--primary)] font-bold' : '') +
                  '">Home <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i></button>' +
                '<div class="mobile-sub hidden pl-4">' +
                  '<a href="index.html" class="mobile-link block px-4 py-2 text-sm text-[var(--text)] no-underline rounded-lg hover:bg-[var(--surface-hover)] hover:text-[var(--primary)] transition-all">Home 1</a>' +
                  '<a href="home2.html" class="mobile-link block px-4 py-2 text-sm text-[var(--text)] no-underline rounded-lg hover:bg-[var(--surface-hover)] hover:text-[var(--primary)] transition-all">Home 2</a>' +
                '</div>' +
              '</div>' +
              (function () {
                var mHtml = '';
                for (var i = 0; i < pages.length; i++) {
                  var p = pages[i];
                  mHtml += '<a href="' + p.href + '" class="mobile-link relative block px-4 py-3 text-sm font-medium text-[var(--text)] no-underline rounded-xl hover:bg-[var(--surface-hover)] hover:text-[var(--primary)] transition-all' +
                    (p.id === currentPage ? ' text-[var(--primary)] font-bold' : '') +
                    '">' + p.name +
                    (p.id === currentPage ? '<span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[var(--accent)] rounded-r-full"></span>' : '') +
                    '</a>';
                }
                return mHtml;
              })() +
              '<hr class="my-2 border-[var(--border-muted)]">' +
              '<div class="flex items-center gap-2 px-4 py-2">' +
                '<button data-toggle="theme" class="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[var(--text)] no-underline rounded-xl hover:bg-[var(--surface-hover)] transition-all">' +
                  '<i class="fa-solid ' + (isDark ? 'fa-sun' : 'fa-moon') + '"></i> <span>' + (isDark ? 'Light' : 'Dark') + '</span>' +
                '</button>' +
                '<button data-toggle="dir" class="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[var(--text)] no-underline rounded-xl hover:bg-[var(--surface-hover)] transition-all">' +
                  '<i class="fa-solid fa-arrow-right-arrow-left"></i>' +
                '</button>' +
              '</div>' +
              '<div class="flex gap-2 px-4 py-2">' +
                '<a href="login.html" class="mobile-link flex-1 px-4 py-3 text-sm font-semibold text-[var(--primary)] no-underline border-2 border-[var(--primary)] rounded-xl hover:bg-[var(--primary)] hover:text-white transition-all text-center">Login</a>' +
                '<a href="signup.html" class="mobile-link flex-1 px-4 py-3 text-sm font-semibold text-white no-underline bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-hover)] transition-all text-center">Sign Up</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  document.getElementById('navbar-placeholder').innerHTML = html;

  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  var icon = document.getElementById('mobileMenuIcon');

  function openMenu() {
    menu.classList.remove('max-h-0', 'opacity-0', 'invisible');
    menu.classList.add('max-h-[600px]', 'opacity-100', 'visible');
    icon.className = 'fa-solid fa-xmark text-lg';
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    menu.classList.add('max-h-0', 'opacity-0', 'invisible');
    menu.classList.remove('max-h-[600px]', 'opacity-100', 'visible');
    icon.className = 'fa-solid fa-bars text-lg';
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }

  if (btn && menu) {
    btn.onclick = function () {
      if (menu.classList.contains('max-h-0') || menu.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    };
  }

  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.onclick = function () {
      closeMenu();
    };
  });

  document.querySelectorAll('.mobile-sub-toggle').forEach(function (toggle) {
    toggle.onclick = function () {
      var sub = this.nextElementSibling;
      var chevron = this.querySelector('.fa-chevron-down');
      if (sub) {
        sub.classList.toggle('hidden');
        if (chevron) {
          chevron.classList.toggle('rotate-180');
        }
      }
    };
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });

  document.querySelectorAll('#navbar-placeholder [data-toggle="theme"]').forEach(function (el) {
    el.onclick = function () {
      var h = document.documentElement;
      h.classList.toggle('dark');
      localStorage.setItem('theme', h.classList.contains('dark') ? 'dark' : 'light');
    };
  });
  document.querySelectorAll('#navbar-placeholder [data-toggle="dir"]').forEach(function (el) {
    el.onclick = function () {
      var h = document.documentElement;
      var cur = h.dir || 'ltr';
      h.dir = cur === 'rtl' ? 'ltr' : 'rtl';
      localStorage.setItem('dir', h.dir);
    };
  });
}
