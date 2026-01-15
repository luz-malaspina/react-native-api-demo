const API_BASE_URL = "https://www.freetogame.com/api";

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
      genre,
      // platform,
      // publisher,
      // developer,
      // game_url,
    } = item;

    return {
      description: short_description,
      releaseDate: release_date,
      score: null,
      slug: String(id),
      title,
      image: thumbnail,
      genre
    };
  });
}

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
    genre,
    // game_url,
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
    reviews: [],
    genre
  };
}
