const filterButtons = document.querySelectorAll('.filter-button');
// JavaScript controla el comportamiento interactivo de la página.
const technologyCards = document.querySelectorAll('.technology-card');

function filterTechnologies(layer) {
    // Ocultamos las tarjetas que no pertenecen al filtro seleccionado.
    technologyCards.forEach((card) => {
        const isVisible = layer === 'all' || card.dataset.layer === layer;
        card.classList.toggle('is-hidden', !isVisible);
    });

    filterButtons.forEach((button) => {
        // Marcamos visualmente el botón que representa el filtro actual.
        button.classList.toggle('is-selected', button.dataset.filter === layer);
    });
}

filterButtons.forEach((button) => {
    button.addEventListener('click', () => filterTechnologies(button.dataset.filter));
});
