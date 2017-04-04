/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import Property from './Property.react';
import TableResult from './TableResult.react';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
//const assign = Object.assign || require('object.assign');

export class Section extends Component {
  render() {

    var {title, properties, dispatch} = this.props;

    var renderProperties = () => {

      if (properties){
        return properties.map((property) => {
          switch (property.type) {
            case 'text':
                return <Property key={property.id}  id={property.id} type={property.type} label={property.label} action={property.action}  value={property.value} href={property.href}/>
            case 'table':
              return <TableResult key={property.id}  id={property.id} type={property.type} label={property.label} cols={property.cols} rows={property.rows}/>
            default:
              return <div>Print a default property</div>
              break;
          };
        });
      }else{
        return <div></div>
      }
  }

    var title = '';
    if (this.props.title){
      title = this.props.title;
    }else{
      title = 'Default title';
    }
    return(
      <div >
        <h2>{title}</h2>
        {renderProperties()}
      </div>
      );
  }
}
export default Section;
