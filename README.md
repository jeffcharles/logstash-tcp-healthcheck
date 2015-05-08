# logstash-tcp-healthcheck

[![NPM](https://nodei.co/npm/logstash-tcp-healthcheck.png)](https://nodei.co/npm/logstash-tcp-healthcheck/)

[![Circle CI](https://circleci.com/gh/jeffcharles/logstash-tcp-healthcheck/tree/master.svg?style=svg)](https://circleci.com/gh/jeffcharles/logstash-tcp-healthcheck/tree/master)

A utility function that tests if a LogStash instance can be reached over TCP.

## Usage

```JavaScript
var logstashHealthcheck = require('logstash-tcp-healthcheck');

var logstashHost = 'http://somelogstashhost.com';
var logstashPort = 9876;

module.exports = function detailedHealthcheck(req, res) {
  logstashHealthcheck(logstashHost, logstashPort)
    .then(function(result) {
      res.json({logstash: result});
    })
    .then(null, function(result) {
      res.status(500).json({logstash: result});
    })
};
```

## Testing

After cloning the repo run `vagrant up` then `npm test`.
