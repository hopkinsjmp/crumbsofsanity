(function () {
  const body = document.body;
  const toggleBtn = document.getElementById('sidebarToggle');
  const backdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    body.classList.add('sidebar-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.removeAttribute('hidden');
  }
  function closeSidebar() {
    body.classList.remove('sidebar-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.setAttribute('hidden', '');
  }
  function toggleSidebar() {
    if (body.classList.contains('sidebar-open')) closeSidebar();
    else openSidebar();
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
})();
