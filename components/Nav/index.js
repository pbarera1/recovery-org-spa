import Link from 'next/link';
import {HEADER_BG} from '../../lib/styles';

import Logo from '../Logo';

export default props => {
    return (
        <header>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <Link href="/topics/quitting-kratom">
                    <a>Post #1</a>
                </Link>
                <Link href="/pro">
                    <a>Pro Corner</a>
                </Link>
                <Link href="/forums">
                    <a>Forums</a>
                </Link>
                <Link href="/stories">
                    <a>Stories</a>
                </Link>
            </nav>
            <style jsx>{`
                header {
                    background-color: ${HEADER_BG};
                    margin: 0 auto;
                    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
                    height: 50px;
                    z-index: 400;
                }
                nav {
                    float: right;
                }
                a {
                    color: white;
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: bold;
                    padding: 0 15px;
                    line-height: 50px;
                    text-decoration: none;
                }
            `}</style>
        </header>
    );
};
