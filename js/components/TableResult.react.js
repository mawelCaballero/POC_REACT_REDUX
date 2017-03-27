import React, {Component} from 'react';
import {Link} from 'react-router';

// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
//const assign = Object.assign || require('object.assign');

export class TableResult extends Component {
    render() {
        var {id, type, label, cols, rows} = this.props;
        var renderCols = cols.map((currentcol) => {
            return <th>{currentcol}</th>;
        });

        var renderRows = rows.map((currentRow) => {
            var container = [];
            var row = [];
            for (var currentColumn in cols) {
                console.log('Rendering Rows ', currentColumn);
                if (currentColumn == '6') {
                    row.push(
                        <td>
                            <Link to={{
                                pathname: '/quote',
                                query: {
                                    link: currentRow.href
                                }
                            }} className="button">Action</Link>
                        </td>
                    );
                } else {
                    row.push(
                        <td>{currentRow[cols[currentColumn]]}</td>
                    );
                }

            }
            container.push(
                <tr>{row}</tr>
            );
            return container;
        });

        return (
            <table>
                <thead>
                    <tr>
                        {renderCols}
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        );
    }
}
export default TableResult;
