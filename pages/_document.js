import Document_, {Head, Main} from 'next/document';
import htmlescape from 'htmlescape';

import {globalStyles} from '../lib/styles';

const {API_URL} = process.env;
const env = {API_URL};

export default class Document extends Document_ {
    static async getInitialProps(context) {
        const props = await Document_.getInitialProps(context);

        return {...props};
    }

    render() {
        return (
            <html>
                <Head>
                    <title>
                        Addiction Recovery – Alcohol and Drug Abuse Treatment Resources
                    </title>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
                    <Main />
                    <script
                        dangerouslySetInnerHTML={{__html: '__ENV__ = ' + htmlescape(env)}}
                    />
                </body>
            </html>
        );
    }
}
