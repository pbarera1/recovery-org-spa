import Document_, {Head, Main} from 'next/document';
import htmlescape from 'htmlescape';

import Nav from '../components/Nav';
import Layout from '../components/Layout';

import {globalStyles} from '../lib/styles';
const {API_URL} = process.env;
const env = {API_URL};

export default class Document extends Document_ {
    static async getInitialProps(context) {
        const props = await Document_.getInitialProps(context);

        return props;
    }

    render() {
        return (
            <html>
                <Head>
                    <title>
                        Addiction Recovery – Alcohol and Drug Abuse Treatment Resources
                    </title>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimal-ui"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <style jsx global>
                        {globalStyles}
                    </style>
                </Head>
                <body>
                    <Layout>
                        <Nav />
                        <Main />
                    </Layout>
                    <script
                        dangerouslySetInnerHTML={{__html: '__ENV__ = ' + htmlescape(env)}}
                    />
                </body>
            </html>
        );
    }
}
