import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import env from '../lib/env';

const {API_URL} = env;

import PostOrPage from '../components/PostOrPage';

export default class Post extends Component {
    static async getInitialProps(context) {
        const slug = context.query.postOrPage;

        let data = {};

        try {
            const response = await fetch(API_URL + slug);
            data = await response.json();
        } catch (e) {
            console.log(e);
        }

        return {
            data,
            API_URL,
            slug
        };
    }
    render() {
        return <PostOrPage {...this.props} />;
    }
}
