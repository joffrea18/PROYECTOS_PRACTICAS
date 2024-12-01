let currentPage = 0;

// Desplazarse a la página seleccionada
function scrollToPage(pageIndex) {
    const cards = document.querySelectorAll('.category-card');
    const carousel = document.querySelector('.carousel-container');
    const offset = cards[pageIndex].offsetLeft;

    carousel.scrollTo({
        left: offset,
        behavior: 'smooth'
    });

    // Actualizar la página actual
    currentPage = pageIndex;
    updateActiveButton();
}

// Moverse a la siguiente o anterior página
function navigatePage(direction) {
    const totalPages = document.querySelectorAll('.category-card').length;
    currentPage = Math.max(0, Math.min(totalPages - 1, currentPage + direction));

    scrollToPage(currentPage);
}

// Marcar el botón de paginación activo
function updateActiveButton() {
    const buttons = document.querySelectorAll('.pagination-btn');
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentPage);
    });
}

// Habilitar/deshabilitar los campos de Backup para Router
function toggleBackupFields() {
    const fibraCheckbox = document.getElementById('fibra-backup');
    const backupIspField = document.getElementById('backup-isp');
    const backupPhoneField = document.getElementById('backup-telefono');
    const backupIpField = document.getElementById('backup-ip');

    if (fibraCheckbox.checked) {
        backupIspField.disabled = false;
        backupPhoneField.disabled = false;
        backupIpField.disabled = false;
    } else {
        backupIspField.disabled = true;
        backupPhoneField.disabled = true;
        backupIpField.disabled = true;
    }
}
