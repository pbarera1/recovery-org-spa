import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import env from '../lib/env';
import Layout from '../components/Layout';
import {getProp} from '../lib/utils';

const {API_URL} = env;

import PostOrPage from '../components/PostOrPage';

export default class Post extends Component {
    static async getInitialProps(context) {
        const slug = context.query.slug;

        let data = {};

        try {
            const response = await fetch(API_URL + slug);
            data = await response.json();
        } catch (e) {
            console.log(e);
        }

        return {
            title: getProp(data, 'title.rendered', ''),
            data,
            API_URL,
            slug
        };
    }
    render() {
        return (
            <Layout>
                <PostOrPage {...this.props} />
            </Layout>
        );
    }
}
