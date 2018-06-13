import React, {Component} from 'react';
import Layout from '../components/Layout';
import withInitialProps from '../lib/withInitialProps';

import PostOrPage from '../components/PostOrPage';

class Article extends Component {
    render() {
        console.log('ARTICLE');
        return (
            <Layout>
                <PostOrPage {...this.props} />
            </Layout>
        );
    }
}

export default withInitialProps(Article, (api, slug) => `${api}/article?slug=${slug}`);