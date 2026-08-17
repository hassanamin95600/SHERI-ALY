function getStreams(tmdbId, mediaType, season, episode) {
  console.log("Fetching streams for TMDB:", tmdbId);
  return Promise.resolve([
    {
      name: "Sample Stream",
      title: "1080p - Direct",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      quality: "1080p",
      format: "mp4"
    }
  ]);
}

module.exports = { getStreams };
