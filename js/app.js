document.addEventListener('DOMContentLoaded', function() {

    // 1. Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        // Abrir / cerrar con el icono hamburguesa
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Ocultar menú si el usuario hace scroll
        window.addEventListener('scroll', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }

    // 2. Formulario de reserva
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Solicitud de cita enviada con éxito! Nos pondremos en contacto contigo en breve para confirmar.');
            this.reset();
        });
    }

});