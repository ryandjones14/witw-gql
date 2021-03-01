module.exports = {
  Query: {
    photos: (_, __, { dataSources }) =>
      dataSources.photoAPI.getRandomPhotos(),
    randomPhoto: (_, __, { dataSources }) =>
      dataSources.photoAPI.getRandomPhoto(),
    // launch: (_, { id }, { dataSources }) =>
    //   dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
