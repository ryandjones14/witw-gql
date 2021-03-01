const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.unsplash.com/';
  }

  async getRandomPhotos() {
    const response = await this.get(`photos/random?client_id=${process.env.UNSPLASH_KEY}&count=30&orientation=landscape`);
    return Array.isArray(response)
      ? response.map(photo => this.photoReducer(photo))
      : [];
  }

  photoReducer(photo) {
    return {
      id: photo.id || 0,
      createdAt: photo.created_at,
      updatedAt: photo.updated_at,
      width: photo.created_width,
      height: photo.height,
      color: photo.color,
      blurHash: photo.blur_hash,
      description: photo.description,
      location: {
        name: photo.location.name,
        city: photo.location.city,
        country: photo.location.country
      },
      urls: {
        regular: photo.urls.regular,
        small: photo.urls.small,
      },
      user: {
        id: photo.user.id,
        username: photo.user.username,
        portfolioUrl: photo.user.portfolio_url,
      },
    };
  }
}

module.exports = UserAPI;