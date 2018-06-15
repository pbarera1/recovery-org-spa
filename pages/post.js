import React, {Component} from 'react';
import Layout from '../components/Layout';
import withInitialProps from '../lib/withInitialProps';

import PostOrPage from '../components/PostOrPage';

class Post extends Component {
    render() {
        return (
            <Layout>
                <h1>Post</h1>
                <PostOrPage {...this.props} />
            </Layout>
        );
    }
}

export default withInitialProps(Post, (api, slug) => `${api}/post?slug=${slug}`);
