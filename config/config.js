var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'learntech'
    },
    port: 3000,
    db: 'mysql://root@localhost/video'
  },

  test: {
    root: rootPath,
    app: {
      name: 'learntech'
    },
    port: 3000,
    db: 'mysql://localhost/learntech-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'learntech'
    },
    port: 3000,
    db: 'mysql://localhost/learntech-production'
  }
};

module.exports = config[env];
