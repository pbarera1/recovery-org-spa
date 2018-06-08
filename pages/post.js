import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

export default class Post extends Component {
    static async getInitialProps(context) {
        const slug = context.query.slug;
        const reqUrl = 'https://www.recovery.org/wp-json/wp/v2/posts/' + slug;

        const res = await fetch(reqUrl);
        const data = await res.json();

        return {data};
    }

    render() {
        const html =
            this.props.data &&
            this.props.data.content &&
            this.props.data.content.rendered;
        return (
            <div>
                <h1>{this.props.url.query.slug}</h1>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        );
    }
}
