import { onMounted, nextTick } from 'vue';

export function useThemeLayout() {
  onMounted(async () => {
    // Đợi DOM render xong
    await nextTick();

    // Thêm delay nhỏ để đảm bảo mọi thứ đã sẵn sàng
    setTimeout(() => {
      initComponents();
      initFullscreen();
      initFormValidation();
      initMainMenu();
      initSidebarToggle();
    }, 50);
  });

  const initComponents = () => {
    // Tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
      new window.bootstrap.Tooltip(el);
    });

    // Popovers
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
      new window.bootstrap.Popover(el);
    });

    // Theme mode toggle
    const themeToggle = document.getElementById('theme-mode');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
        sessionStorage.setItem('themeMode', newTheme);
      });
    }

    // Set initial theme
    const savedTheme =
      sessionStorage.getItem('themeMode') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  };

  const initFullscreen = () => {
    const fullscreenBtn = document.querySelector('[data-bs-toggle="fullscreen"]');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('fullscreen-enable');

        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
    }
  };

  const initFormValidation = () => {
    document.querySelectorAll('.needs-validation').forEach((form) => {
      form.addEventListener(
        'submit',
        (e: Event) => {
          if (!(form as HTMLFormElement).checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  };

  const initMainMenu = () => {
    const menuLinks = document.querySelectorAll('.app-menu .menu-link');
    const currentUrl = window.location.href.split(/[?#]/)[0];

    menuLinks.forEach((link: any) => {
      if (link.href === currentUrl) {
        link.classList.add('active');
        link.parentNode?.classList.add('active');

        let parent = link.closest('.collapse');
        while (parent) {
          parent.classList.add('show');
          parent.parentElement?.classList.add('active');
          parent = parent.parentElement?.closest('.collapse');
        }
      }
    });

    setTimeout(() => {
      const activeItem = document.querySelector('li.active .active');
      if (activeItem) {
        const menuWrapper = document.querySelector('.main-menu .simplebar-content-wrapper');
        const targetOffset = (activeItem as HTMLElement).offsetTop - 300;

        if (menuWrapper && targetOffset > 100) {
          menuWrapper.scrollTo({
            top: targetOffset,
            behavior: 'smooth',
          });
        }
      }
    }, 200);
  };

  const initSidebarToggle = () => {
    const menuToggle = document.querySelector('.button-toggle-menu');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const html = document.documentElement;
        html.classList.toggle('sidebar-enable');
      });
    }
  };
}
