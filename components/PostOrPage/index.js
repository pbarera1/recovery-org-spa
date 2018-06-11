import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

import {getProp} from '../../lib/utils';

export default class PostOrPage extends Component {
    render() {
        const html = getProp(this.props, 'data.content.rendered', '');

        return (
            <div>
                <h1>test</h1>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        );
    }
}
