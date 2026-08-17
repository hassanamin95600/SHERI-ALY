/**
 * Movix Provider Resolver
 * Targets French (VF) and Subtitled (VOSTFR) streams from movix.bet
 */
const BASE_URL = "https://movix.bet";

async function getStreams(tmdbId, mediaType, season, episode) {
  try {
    const streams = [];

    // Search / query endpoint pattern for Movix
    const searchUrl = `${BASE_URL}/api/search?tmdb=${tmdbId}&type=${mediaType}`;

    // Fallback direct embed resolvers for French audio/subs
    streams.push(
      {
        name: "Movix Server 1 (VF)",
        title: `Movix - French Dub ${mediaType === 'tv' ? `S${season} E${episode}` : 'Full HD'}`,
        url: `${BASE_URL}/embed/${mediaType === 'tv' ? 'tv' : 'movie'}/${tmdbId}${mediaType === 'tv' ? `/${season}/${episode}` : ''}?lang=vf`,
        quality: "1080p",
        format: "m3u8",
        headers: {
          "Referer": BASE_URL,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      },
      {
        name: "Movix Server 2 (VOSTFR)",
        title: `Movix - Original with FR Subs ${mediaType === 'tv' ? `S${season} E${episode}` : 'Full HD'}`,
        url: `${BASE_URL}/embed/${mediaType === 'tv' ? 'tv' : 'movie'}/${tmdbId}${mediaType === 'tv' ? `/${season}/${episode}` : ''}?lang=vostfr`,
        quality: "1080p",
        format: "m3u8",
        headers: {
          "Referer": BASE_URL,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      }
    );

    return streams;
  } catch (error) {
    console.error("Movix stream resolver error:", error);
    return [];
  }
}

module.exports = { getStreams };
