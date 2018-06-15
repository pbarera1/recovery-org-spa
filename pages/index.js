import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default props => {
    return (
        <Layout>
            <h1>Recovery.org</h1>
            <ul style={{marginLeft: '30px'}}>
                <li>
                    <Link href="/sum-41-singer-admits-alcoholism-nearly-killed-him/">
                        <a>post</a>
                    </Link>
                </li>
                <li>
                    <Link href="/topics/quitting-kratom">
                        <a>article</a>
                    </Link>
                </li>
                <li>
                    <Link href="/pro/articles/a-toxic-mixture-alcohol-and-adolescents/">
                        <a>pro corner</a>
                    </Link>
                </li>
                <li>
                    <Link href="/browse/district-of-columbia">
                        <a>state page</a>
                    </Link>
                </li>
                <li>
                    <Link href="/browse/san-diego-ca">
                        <a>city page</a>
                    </Link>
                </li>
            </ul>
        </Layout>
    );
};
