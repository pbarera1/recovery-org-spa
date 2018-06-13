const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
});
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        const server = express();

        server.get('/robots.txt', (req, res) => {
            res.status(200).sendFile('robots.txt', {
                root: path.join(__dirname, 'static'),
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8'
                }
            });
        });

        /**
         * City/State post type
         */
        server.get('/browse/:slug', (req, res) => {
            const actualPage = /-[a-zA-Z]{2}$/.test(req.params.slug) ? '/city' : '/state';
            const queryParams = {slug: req.params.slug};

            app.render(req, res, actualPage, queryParams);
        });

        /**
         * Pro Corner post type
         */
        server.get('/pro/articles/:slug', (req, res) => {
            const actualPage = '/pro';
            const queryParams = {slug: req.params.slug};

            app.render(req, res, actualPage, queryParams);
        });

        /**
         * Articles post type
         */
        server.get('/topics/:slug', (req, res) => {
            const actualPage = '/article';
            const queryParams = {slug: req.params.slug};

            app.render(req, res, actualPage, queryParams);
        });

        /**
         * Posts
         */
        server.get('/:slug', (req, res) => {
            const actualPage = '/post';
            const queryParams = {slug: req.params.slug};

            app.render(req, res, actualPage, queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
