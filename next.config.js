module.exports = {
  async rewrites() {
    return [
      {
        source: '/tutorial',
        destination: '/Tutorial',
      },
      {
        source: '/levels',
        destination: '/',
      },
      {
        source: '/levels/2',
        destination: '/Levels/2',
      },
      {
        source: '/levels/dark-puzzle',
        destination: '/Levels/Darkpuzzle',
      },
      {
        source: '/levels/level3',
        destination: '/Levels/Level3',
      },
      {
        source: '/levels/yes',
        destination: '/Levels/Yes',
      },
    ];
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/darkpuzzle/image/upload/",
    formats: ["image/avif", "image/webp"],
  },
};
