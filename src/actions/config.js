const host = window.location;

module.exports = {

  host: 'http://${host.port === '80' ? host.hostname : hostname + ':' + host.port}',

  //host: 'http://localhost:3300'

  thumbHost: 'http://47.90.35.9.3000'
}