'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
    }
  };
  Movie.init({
    movieId: DataTypes.INTEGER,
    movieTitle: DataTypes.STRING,
    moviePoster: DataTypes.STRING,
    rentId: DataTypes.INTEGER,
   //rentedDate: DataTypes.DATE,
    //returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};