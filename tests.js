var assert = require('assert'),
  logstashHealthcheck = require('./');

describe('logstash healthcheck', function() {
  it('should return `Reachable` given valid host and port', function() {
    return logstashHealthcheck('localhost', 10000)
      .then(function(result) {
        assert.equal(result, 'Reachable');
      });
  });

  it('should return `Unreachable` given invalid host and port', function() {
    return logstashHealthcheck('localhost', 9999)
      .then(null, function(err) {
        assert.equal(err.message, 'Unreachable');
      });
  });
});
