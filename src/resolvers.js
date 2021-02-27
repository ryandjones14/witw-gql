module.exports = {
  Query: {
    photos: (_, __, { dataSources }) =>
      dataSources.photoAPI.getRandomPhotos(),
    // launch: (_, { id }, { dataSources }) =>
    //   dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
