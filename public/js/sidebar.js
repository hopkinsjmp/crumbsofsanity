(function () {
  const sidebar   = document.getElementById('siteSidebar');
  const toggleBtn = document.getElementById('sidebarToggle');
  const closeBtn  = document.getElementById('sidebarClose');
  const backdrop  = document.getElementById('sidebarBackdrop');
  if (!sidebar || !toggleBtn || !backdrop) return;

  const open = () => {
    sidebar.classList.add('drawer--open');
    backdrop.classList.add('drawer-backdrop--show');
    document.body.classList.add('no-scroll');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    sidebar.classList.remove('drawer--open');
    backdrop.classList.remove('drawer-backdrop--show');
    document.body.classList.remove('no-scroll');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('drawer--open');
    isOpen ? close() : open();
  });
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
