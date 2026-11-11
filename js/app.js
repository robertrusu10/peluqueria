document.addEventListener('DOMContentLoaded', function() {

    // 1. Menú móvil (se ejecuta en TODAS las páginas)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Formulario de reserva (solo se ejecuta si el formulario existe en la página)
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Solicitud de cita enviada con éxito! Nos pondremos en contacto contigo en breve para confirmar.');
            this.reset();
        });
    }

});