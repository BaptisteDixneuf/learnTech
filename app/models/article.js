// Example model


module.exports = function (sequelize, DataTypes) {

  var Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          args: true
        }
      }
    },
    text: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: {
          args: true
        }
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Article;
};

