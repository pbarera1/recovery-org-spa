import React, {Component} from 'react';
import Layout from '../components/Layout';
import {getProp} from '../lib/utils';
import withInitialProps from '../lib/withInitialProps';

class City extends Component {
    formatAdvancedCustomFields = () => {
        const acfObject = getProp(this.props.data, 'acf', {});

        return Object.keys(acfObject).reduce((acc, cur) => {
            let text = acfObject[cur];

            if (cur.match('h1')) {
                text = `<h1>${text}</h1>`;
            } else if (cur.match('h2')) {
                text = `<h2>${text}</h2>`;
            } else if (cur.match('h3')) {
                text = `<h3>${text}</h3>`;
            }

            acc += text;

            return acc;
        }, '');
    };

    render() {
        console.log('CITY');
        return (
            <Layout>
                <div
                    dangerouslySetInnerHTML={{__html: this.formatAdvancedCustomFields()}}
                />
            </Layout>
        );
    }
}

export default withInitialProps(City, (api, slug) => `${api}/city?slug=${slug}`);
