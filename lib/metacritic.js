const API_BASE_URL = "https://www.freetogame.com/api";

/**
 * Devuelve una lista de items para renderizar en un listado.
 * Mantiene la misma forma general que venías usando: { description, releaseDate, score, slug, title, image }
 */
export async function getLatestGames() {
  const url = `${API_BASE_URL}/games`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const data = await res.json();

  return data.slice(0, 24).map((item) => {
    const {
      id,
      title,
      short_description,
      thumbnail,
      release_date,
      // Estos pueden servir más adelante si querés
      // genre,
      // platform,
      // publisher,
      // developer,
      // game_url,
    } = item;

    return {
      description: short_description,
      releaseDate: release_date,
      score: null, // esta API no trae score tipo Metacritic
      slug: String(id), // lo usamos como identificador (antes era slug)
      title,
      image: thumbnail,
    };
  });
}

/**
 * Devuelve detalle para un juego.
 * Esta API no tiene un endpoint directo "by id" en /api, así que para demo:
 * - trae la lista (o podrías cachearla) y busca el item por id
 * - arma un objeto similar al que tenías: { img, title, slug, description, score, reviews }
 */
export async function getGameDetails(slug) {
  const id = Number(slug);
  const url = `${API_BASE_URL}/games`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  const data = await res.json();

  const game = data.find((g) => g.id === id);

  if (!game) {
    throw new Error(`Game not found for id: ${slug}`);
  }

  const {
    title,
    short_description,
    thumbnail,
    // Datos extra disponibles (por si querés mostrarlos en un detail screen)
    // game_url,
    // genre,
    // platform,
    // publisher,
    // developer,
    // release_date,
  } = game;

  return {
    img: thumbnail,
    title,
    slug: String(game.id),
    description: short_description,
    score: null,
    reviews: [], // no hay reviews en esta API; lo dejamos vacío para no romper
  };
}
