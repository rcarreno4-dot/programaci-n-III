import { apiService } from '../services/api-service.js';
import { favoriteService } from '../services/favorite-service.js';
import { uiService } from '../services/ui-service.js';

const container = document.querySelector('#game-detail');
const id = new URLSearchParams(window.location.search).get('id') || 1;

async function loadDetail() {
    const game = await apiService.getGameById(id);
    if (!game) { container.innerHTML = uiService.error('Videojuego no encontrado.'); return; }
    container.innerHTML = `<article class="detail-layout"><div class="detail-cover ${game.color}"><img src="${game.image}" alt="Imagen de ${game.title}"><span>${game.genre}</span><strong>${game.title}</strong></div><div class="detail-copy"><p class="eyebrow">Respuesta 200 · GET /games/${game.id}</p><h1>${game.title}</h1><p>${game.description}</p><div class="detail-meta"><span><b>★ ${game.rating}</b> valoración</span><span><b>${game.year}</b> lanzamiento</span><span><b>${game.genre}</b> género</span></div><button class="button button-primary" id="favorite-button">${favoriteService.isFavorite(game.id) ? '★ En favoritos' : '☆ Agregar a favoritos'}</button><p class="service-note">La información fue entregada por <strong>GameDetailService</strong>.</p></div></article>`;
    document.querySelector('#favorite-button').addEventListener('click', (event) => { favoriteService.toggle(game.id); event.currentTarget.textContent = favoriteService.isFavorite(game.id) ? '★ En favoritos' : '☆ Agregar a favoritos'; });
}

loadDetail().catch(() => { container.innerHTML = uiService.error('El servicio no está disponible.'); });
