var env = {
  test: {
    ENV: 'test'
  },
  development: {
    ENV: JSON.stringify('development'),
    HOST: JSON.stringify('http://localhost:8080'),
    API_URL: JSON.stringify('http://localhost:3001/api/v1/'),
    STATIC_IMAGES_URL: JSON.stringify('https://s3.amazonaws.com/static-images.padpiper.com/'),
    IMAGES_URL: JSON.stringify('https://s3.amazonaws.com/dev-images.padpiper.com/'),
    IMAGES_CONTAINER: JSON.stringify('dev-images.padpiper.com'),
    GOOGLE_API_KEY: JSON.stringify('AIzaSyDV1jPTyTEcRo92Rj3BdmCk49VdIxs1b0k'),
  },
  production: {
    ENV: JSON.stringify('production'),
    HOST: JSON.stringify('https://www.jackforbes.net'),
    API_URL: JSON.stringify('/api/v1/'),
    STATIC_IMAGES_URL: JSON.stringify('https://s3.amazonaws.com/static-images.padpiper.com/'),
    IMAGES_URL: JSON.stringify('https://s3.amazonaws.com/images.padpiper.com/'),
    IMAGES_CONTAINER: JSON.stringify('images.padpiper.com'),
    GOOGLE_API_KEY: JSON.stringify('AIzaSyDV1jPTyTEcRo92Rj3BdmCk49VdIxs1b0k'),
  }
}

module.exports = env;
