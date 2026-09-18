import { apiService } from '../services/api-service.js';
import { uiService } from '../services/ui-service.js';

const grid = document.querySelector('#catalog-grid');
const filter = document.querySelector('#genre-filter');
const count = document.querySelector('#game-count');
let catalog = [];

function renderCatalog() {
    const visibleGames = filter.value === 'all' ? catalog : catalog.filter((game) => game.genre === filter.value);
    count.textContent = `${visibleGames.length} juegos encontrados`;
    grid.innerHTML = visibleGames.map((game) => uiService.gameCard(game, '../')).join('');
}

async function loadCatalog() {
    try { catalog = await apiService.getGames(); renderCatalog(); } catch (error) { grid.innerHTML = uiService.error('No fue posible cargar el catálogo.'); }
}

filter.addEventListener('change', renderCatalog);
loadCatalog();
