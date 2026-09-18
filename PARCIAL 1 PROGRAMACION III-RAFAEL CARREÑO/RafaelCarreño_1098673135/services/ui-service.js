// Servicio de interfaz: comparte la representación visual de un videojuego.
export const uiService = {
    gameCard(game, basePath = '') {
        return `<a class="game-card" href="${basePath}views/detalle.html?id=${game.id}"><div class="game-cover ${game.color}"><img src="${game.image}" alt="Imagen de ${game.title}"><span>${game.genre}</span><strong>${game.title}</strong><small>${String(game.id).padStart(2, '0')} / ${game.year}</small></div><div class="game-info"><div><span class="rating">★ ${game.rating}</span><h3>${game.title}</h3></div><span class="text-link">Ver detalle →</span></div></a>`;
    },
    error(message) { return `<p class="error-message">${message}</p>`; }
};
