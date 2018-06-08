const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        const server = express();

        server.get('/:slug', (req, res) => {
            const page = '/post';
            const queryParams = {slug: req.params.slug};
            console.log(page, req.params.slug);
            app.render(req, res, page, queryParams);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${PORT}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
