import React from 'react';
import fetch from 'isomorphic-unfetch';

import {getProp} from '../lib/utils';
import env from '../lib/env';

const {API_URL} = env;

export default (Page, apiCallback) => {
    return class extends React.Component {
        static async getInitialProps(context) {
            if (Page.getInitialProps) {
                return Page.getInitialProps(context);
            } else if (!apiCallback) {
                return console.log('No URL specified by callback');
            }

            const slug = getProp(context, 'query.slug', '');

            let data = {};
            const url = apiCallback(API_URL, slug);

            console.log(url);

            try {
                const response = await fetch(url);
                data = await response.json();

                if (Array.isArray(data) && data.length === 1) {
                    data = data[0];
                }
            } catch (e) {
                console.warn(e);
            }

            // console.log('......HOC', context.query);
            // console.log(data);

            return {
                title: getProp(data, 'title.rendered', ''),
                data,
                API_URL,
                slug
            };
        }

        render() {
            return <Page {...this.props} />;
        }
    };
};
