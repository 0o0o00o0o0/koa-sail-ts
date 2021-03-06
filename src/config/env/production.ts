const prod = {
  jwtSecret: 'test',
  log4js: {
    appenders: {
      sail: {
        type: 'file',
        filename: 'logs/log',
        maxLogSize: 20971520,
        backups: 10
      }
    },
    categories: {
      default: {
        appenders: [
          'sail'
        ],
        level: 'ERROR'
      }
    }
  },
  db: {},
  port: 8181
};

export default prod;
