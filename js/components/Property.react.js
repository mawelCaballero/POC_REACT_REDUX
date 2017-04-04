import React, {Component} from 'react';
import {connect} from 'react-redux';

import {searchAction, patchAction} from '../actions/AppActions';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
//const assign = Object.assign || require('object.assign');

export class Property extends Component {
    render() {
        var dispatch = this.props.dispatch;
        var {id, type, label, action, value, href} = this.props;

        var renderInputActionSearch = () => {

            if (action && action.actionType === 'search') {
                return <input type="button" className="button" onClick={() => {
                    var searchCriteria = this.textInput.value;
                    this.textInput.value = '';
                    dispatch(searchAction({
                        ...action,
                        inputValue: searchCriteria
                    }));
                }} value="Search"></input>
            }
            return null;
        }

        return (
            <div className="row">
                <div className="small-2 large-4 columns">
                    <label className="label" htmlFor={id}>{label}</label>
                </div>
                <div className="small-6 large-6 columns">
                    <input  type={type} id={id} name={id} ref={(input) => {
                        this.textInput = input;
                    }} value={value}   onChange={()=>{
                      console.log(this.textInput.value);
                      if (typeof this.textInput.value !== 'undefined' && this.textInput.value.length > 2){
                        dispatch(patchAction({
                            value: this.textInput.value,
                            url: href,
                            id: this.textInput.id
                        }));
                      }
                    } }/>
                </div>

                <div className="small-2 large-2 columns">
                    {renderInputActionSearch()}
                </div>

            </div>
        );
    }
}
export default connect()(Property);
