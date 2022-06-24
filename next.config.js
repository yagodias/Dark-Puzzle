module.exports = {
    async redirects() {
      return [
        {
          source: '/tutorial',
          destination: '/Tutorial',
          permanent: true,
        }
      ]
    },
    async rewrites() {
      return [
        {
          source: '/tutorial',
          destination: '/Tutorial',
        }
      ]
    }
  }
