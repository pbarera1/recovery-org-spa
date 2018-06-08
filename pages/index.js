import {Link} from './../routes.js';
import App from './_app.js';

export default () => (
    <div>
        <Link route="/about">
            <a>About</a>
        </Link>
        <h1>Home</h1>
        <Link route="/4463">
            <a>Post #1</a>
        </Link>
    </div>
);
