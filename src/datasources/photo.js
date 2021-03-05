const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class PhotoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.unsplash.com/';
  }

  async getRandomPhotos() {
    let result = [];
    do {
      const response = await this.get(`photos/random?client_id=${process.env.UNSPLASH_KEY}&count=30&orientation=landscape`);
      let photos = Array.isArray(response)
        ? response.map(photo => this.photoReducer(photo))
        : [];
      photos.forEach(photo => {
        if (photo.location?.country?.length > 0) {
          result.push(photo);
        }
      });
    } while (result.length < 10);
    return result;
  }

  async getRandomPhoto() {
    const response = await this.get(`photos/random?client_id=${process.env.UNSPLASH_KEY}&orientation=landscape`);
    let resp = this.photoReducer(response);
    if (resp.location && resp.location.country === null || resp.location.country === "") {
      resp.location.country = "POTATOLAND";
    }
    return [resp];
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

module.exports = PhotoAPI;