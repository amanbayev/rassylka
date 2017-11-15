module.exports = {
  servers: {
    one: {
      host: 'ip address',
      username: 'root',
      password: 'password'
    }
  },

  meteor: {
      name: 'projectname',
      path: '..',
      dockerImage: 'abernix/meteord:node-8.4.0-base',
      servers: {
        one: {}
      },
      buildOptions: {
        serverOnly: true,
      },
      env: {
        ROOT_URL: 'http://ip adres/',
        MONGO_URL: 'http://ip adres:3001/'
      },
      deployCheckWaitTime: 120,
      enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
