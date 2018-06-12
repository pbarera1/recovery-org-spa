import React, {Component} from 'react';
import Layout from '../components/Layout';
// import fetch from 'isomorphic-unfetch';
// import env from '../lib/env';
// import {getProp} from '../lib/utils';

// const {API_URL} = env;

// import PostOrPage from '../components/PostOrPage';

// export default class Index extends React.Component {
//     static async getInitialProps(context) {
//         const slug = context.query.postOrPage;

//         let data = {};

//         const {API_URL} = env;

//         try {
//             const response = await fetch(API_URL + slug);
//             data = await response.json();
//         } catch (e) {
//             console.log(e);
//         }

//         console.log('INDEX', slug);

//         return {
//             title: getProp(data, 'title.rendered'),
//             data,
//             API_URL,
//             slug
//         };
//     }

//     render() {
//         return <PostOrPage {...this.props} />;
//     }
// }

export default props => {
    console.log('INDEX');
    return (
        <Layout>
            <h1>Recovery.org</h1>
        </Layout>
    );
};
