document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('#nav_list .nav-item a');
  

  document.querySelectorAll('#nav_list .nav-item').forEach(item => {
    item.classList.remove('active');
  });

  let currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'index.html';
  }


  navItems.forEach(link => {
    const href = link.getAttribute('href');
    

    if (href.startsWith('#')) return;
    

    if (href === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
});