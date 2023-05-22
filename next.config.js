module.exports = {
  async rewrites() {
    return [
      { source: '/', destination: '/Index' },
      { source: '/tutorial', destination: '/Tutorial' },
      { source: '/about', destination: '/About' },
      { source: '/whoami', destination: '/WhoAmI' },
      { source: '/2', destination: '/Levels/2' },
      { source: '/dark-puzzle', destination: '/Levels/3'},
      { source: '/level3', destination: '/Levels/Level3'},
      { source: '/yes', destination: '/Levels/Yes'},
    ];
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/darkpuzzle/image/upload/",
    formats: ["image/avif", "image/webp"],
  },
};
