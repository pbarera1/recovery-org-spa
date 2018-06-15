const fs = require('fs');
const path = require('path');
const url = require('url');

const OUTPUT_FILENAME = 'url_map.json';

fs.readFile(path.join(__dirname, 'crawl_result.txt'), (err, data) => {
    if (err) throw err;

    const arr = data.toString().split('\n');

    const map = arr.reduce(
        (acc, cur) => {
            const pathname = url.parse(cur).pathname;
            const splitBySlash = pathname.split('/').filter(p => p);

            if (splitBySlash.length === 0 || splitBySlash.length === 1) {
                acc['/:slug'] = pathname;
            } else {
                let withoutSlug = splitBySlash.slice(0, splitBySlash.length - 1);
                const joined = '/' + withoutSlug.join('/');
                acc[joined + '/:slug'] = pathname;
            }

            return acc;
        },
        {
            '/browse/:slug': '/browse/san-diego-ca',
            '/providers/:slug': '/providers/blvd-treatment-centers-2407078803'
        }
    );

    fs.writeFile(
        path.join(__dirname, OUTPUT_FILENAME),
        JSON.stringify(map, null, 2),
        'utf8',
        err => {
            if (err) throw err;
            console.log(`File ${OUTPUT_FILENAME} has been written`);
        }
    );
});
