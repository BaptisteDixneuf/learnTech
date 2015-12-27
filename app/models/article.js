// Example model


module.exports = function (sequelize, DataTypes) {

  var Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        notEmpty: true,
        notContains: '',
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      notContains: '',
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      notEmpty: true,
      notContains: '',
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

