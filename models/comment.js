'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    movie_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.TEXT
    },
    ip_address: {
      type: DataTypes.STRING
    },
     createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
    timestamps: true,
    paranoid: true,
    tableName: 'comments',
  });
  return Comment;
};