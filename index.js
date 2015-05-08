var BPromise = require('bluebird'),
  tcpPing = BPromise.promisifyAll(require('tcp-ping'));

module.exports = function(logstashHost, logstashPort) {
  return tcpPing.probeAsync(
    logstashHost,
    logstashPort
  ).then(function(available) {
    if (available) {
      return 'Reachable';
    }
    throw new Error('Unreachable');
  });
};
