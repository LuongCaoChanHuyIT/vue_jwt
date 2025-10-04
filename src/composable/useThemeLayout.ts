import { onMounted } from 'vue';

export function useThemeLayout() {
  onMounted(() => {
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => {
      new window.bootstrap.Tooltip(el);
    });

    // Initialize popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach((el) => {
      new window.bootstrap.Popover(el);
    });

    // Theme mode toggle
    const themeToggle = document.getElementById('theme-mode');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
        sessionStorage.setItem('themeMode', newTheme);
      });
    }

    // Initialize theme from session
    const savedTheme = sessionStorage.getItem('themeMode') || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    // Sidebar toggle
    const menuToggle = document.querySelector('.button-toggle-menu');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('sidebar-enable');
      });
    }

    // Fullscreen toggle
    const fullscreenBtn = document.querySelector('[data-bs-toggle="fullscreen"]');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
    }
  });
}
