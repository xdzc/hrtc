var express = require('express'),
  router = express.Router();

router.get('/', function(request, response, next) {
  response.send('dashboard index');
});

router.get('/chat', function(request, response, next) {
  response.send('dashboard chat');
});

module.exports = router;