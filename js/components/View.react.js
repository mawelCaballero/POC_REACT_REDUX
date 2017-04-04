/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, {Component} from 'react';
import {Section} from './Section.react';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
//const assign = Object.assign || require('object.assign');

class View extends Component {
    render() {
        var {data, dispatch} = this.props;

        var renderTitle = () => {
            if (data !== null && data.title !== null && typeof data.title !== 'undefined') {
                return <div>{data.title}</div>;
            } else {
                return <div>Loading</div>;
            }
        }

        var renderSections = () => {

            if (data && data.sections) {
                return data.sections.map((section) => {
                    return <Section key={section.title} title={section.title} properties={section.properties}/>;
                });
            } else {
                return <div>... be pacience </div>
            }

        };

        return (
            <div>
                <h1 >{renderTitle()}</h1>
                {renderSections()}
            </div>
        )
    }
}

export default View;
