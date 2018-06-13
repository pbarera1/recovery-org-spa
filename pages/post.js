import React, {Component} from 'react';
import Layout from '../components/Layout';
import withInitialProps from '../lib/withInitialProps';

import PostOrPage from '../components/PostOrPage';

class Post extends Component {
    render() {
        console.log('POST');
        return (
            <Layout>
                <PostOrPage {...this.props} />
            </Layout>
        );
    }
}

export default withInitialProps(Post, (api, slug) => `${api}/post?slug=${slug}`);
