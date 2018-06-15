import React, {Component} from 'react';

import {getProp} from '../../lib/utils';

export default class PostOrPage extends Component {
    render() {
        console.log('DID I MOUNT?');
        const html = getProp(this.props, 'data.content.rendered', '');

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        );
    }
}
