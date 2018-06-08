const routes = require('next-routes')();

routes.add('about').add('/:postOrPage', 'post');

module.exports = routes;
