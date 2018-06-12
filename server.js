const express = require('express');
const next = require('next');

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
            res.send(`
				User-agent: *
				Disallow: /xmlrpc.php
				Disallow: /forum/*
				Disallow: /*?Sort=

				User-agent: MSNBot
				Crawl-delay: 5

				User-agent: bingbot
				Crawl-delay: 5
			`);
        });

        server.get('/topics/:articleSlug', (req, res) => {
            const actualPage = '/article';
            const queryParams = {slug: req.params.articleSlug};

            app.render(req, res, actualPage, queryParams);
        });

        server.get('/:postOrPageSlug', (req, res) => {
            const actualPage = '/post';
            const queryParams = {slug: req.params.postOrPageSlug};

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
