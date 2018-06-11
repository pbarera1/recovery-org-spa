const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    express()
        .use(handler)
        .listen(PORT);
});

// app.prepare()
//     .then(() => {
//         const server = express();

//         server.use((req, res, next) => {
//             res.setHeader('Content-Type', 'text/html');
//             next();
//         });

//         server.get('/:slug', (req, res) => {
//             const page = '/post';
//             const queryParams = {slug: req.params.slug};
//             console.log('SLUG', req.url);
//             app.render(req, res, page, queryParams);
//         });

//         server.get('*', (req, res) => {
//             console.log('*', req.url);
//             return handle(req, res);
//         });

//         server.listen(PORT, err => {
//             if (err) throw err;
//             console.log(`> Ready on http://localhost:${PORT}`);
//         });
//     })
//     .catch(ex => {
//         console.error(ex.stack);
//         process.exit(1);
//     });
