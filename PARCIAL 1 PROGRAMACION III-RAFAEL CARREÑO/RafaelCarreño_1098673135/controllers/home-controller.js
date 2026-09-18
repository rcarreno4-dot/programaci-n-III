import { apiService } from '../services/api-service.js';
import { uiService } from '../services/ui-service.js';

const featured = document.querySelector('#featured-games');

async function loadFeaturedGames() {
    try {
        const games = await apiService.getGames();
        featured.innerHTML = games.slice(0, 3).map((game) => uiService.gameCard(game)).join('');
    } catch (error) { featured.innerHTML = uiService.error('No fue posible cargar los destacados.'); }
}

loadFeaturedGames();
