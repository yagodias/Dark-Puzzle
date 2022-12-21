module.exports = {
  async rewrites() {
    return [
      { source: '/', destination: '/Index' },
      { source: '/tutorial', destination: '/Tutorial' },
      { source: '/about', destination: '/About' },
      { source: '/whoami', destination: '/WhoAmI' },
      { source: '/levels/2', destination: '/Levels/2' },
      { source: '/levels/dark-puzzle', destination: '/Levels/Darkpuzzle'},
      { source: '/levels/level3', destination: '/Levels/Level3'},
    ];
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/darkpuzzle/image/upload/",
    formats: ["image/avif", "image/webp"],
  },
};
