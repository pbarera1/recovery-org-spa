import React, {Component} from 'react';
import Layout from '../components/Layout';
import withInitialProps from '../lib/withInitialProps';

import PostOrPage from '../components/PostOrPage';

class Pro extends Component {
    render() {
        return (
            <Layout>
                <h1>Pro</h1>
                <PostOrPage {...this.props} />
            </Layout>
        );
    }
}

export default withInitialProps(Pro, (api, slug) => `${api}/pro?slug=${slug}`);
