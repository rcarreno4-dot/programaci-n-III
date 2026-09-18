const STORAGE_KEY = 'nom-ced-favorites';

// Servicio de favoritos: encapsula la persistencia local del usuario.
export const favoriteService = {
    getFavorites() { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); },
    isFavorite(id) { return this.getFavorites().includes(Number(id)); },
    toggle(id) {
        const favorites = this.getFavorites();
        const next = favorites.includes(Number(id)) ? favorites.filter((favorite) => favorite !== Number(id)) : [...favorites, Number(id)];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
    }
};
