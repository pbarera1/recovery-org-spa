import Link from 'next/link';
import App from './_app.js';

export default () => (
    <div>
        <Link href="/about">
            <a>About</a>
        </Link>
        <h1>Home</h1>
        <Link prefetch href="4463">
            <a>Post #1</a>
        </Link>
    </div>
);
