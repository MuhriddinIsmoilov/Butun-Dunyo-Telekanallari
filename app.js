document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('mainIframe');
  const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');

  // Tablar bo'yicha yo'nalishlar
  const routes = {
    tv: "https://famelack.com",
    radio: "https://famelack.com",
    explore: "https://famelack.com",
    settings: "https://famelack.com"
  };

  // Menyu bosilganda faollashtirish
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const tab = item.getAttribute('data-tab');
      
      // Barcha faol klasslarni tozalash
      navItems.forEach(el => el.classList.remove('active'));

      // Bir xil tabdagi desktop va mobile tugmalarni aktiv qilish
      document.querySelectorAll(`[data-tab="${tab}"]`).forEach(el => el.classList.add('active'));

      // Iframeni almashtirish
      if (routes[tab]) {
        iframe.src = routes[tab];
      }
    });
  });

  // Ekran hajmi o'zgarganda avtomatik qayta hisoblash
  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    console.log(`Rejim: ${isMobile ? 'Mobil' : 'Desktop'}`);
  });
});
