import { games } from '../model/game-model.js';

// Servicio REST: simula endpoints HTTP y devuelve respuestas asíncronas.
const delay = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 180));

export const apiService = {
    async getGames() { return delay([...games]); }, // GET /games
    async getGameById(id) { return delay(games.find((game) => game.id === Number(id))); }, // GET /games/:id
    async createGame(game) { games.push({ ...game, id: games.length + 1 }); return delay(game); }, // POST /games
    async updateGame(id, changes) { const game = games.find((item) => item.id === Number(id)); Object.assign(game, changes); return delay(game); }, // PUT /games/:id
    async deleteGame(id) { const index = games.findIndex((game) => game.id === Number(id)); return delay(games.splice(index, 1)); } // DELETE /games/:id
};
