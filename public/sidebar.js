document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('siteSidebar');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (!btn || !sidebar) return;

  const open = () => {
    sidebar.classList.add('is-open');
    document.body.classList.add('sidebar-open');
    btn.setAttribute('aria-expanded', 'true');
  };

  const close = () => {
    sidebar.classList.remove('is-open');
    document.body.classList.remove('sidebar-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', () => {
    sidebar.classList.contains('is-open') ? close() : open();
  });

  backdrop?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
