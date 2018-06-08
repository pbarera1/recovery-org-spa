import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

export default class Post extends Component {
    static async getInitialProps(context) {
        const slug = context.query.slug;
        const reqUrl = 'https://www.recovery.org/wp-json/wp/v2/posts/' + slug;

        const res = await fetch(reqUrl);
        const data = await res.json();

        console.log(Object.keys(data), `Show data fetched. Count`);

        return {data};
    }

    render() {
        return (
            <div>
                <h1>{this.props.url.query.slug}</h1>
                <div
                    dangerouslySetInnerHTML={{__html: this.props.data.content.rendered}}
                />
            </div>
        );
    }
}
