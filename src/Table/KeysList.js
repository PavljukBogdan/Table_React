import React from 'react';
import PropTypes from 'prop-types';

function KeyList(props) {

    return (
        <table className="table">
        <tbody>
        <tr>
            <th onClick={props.onSort.bind(null, 'id')}>
                ID {props.sortField === 'id' ? <small>{props.sort === 'asc' ?
                <span>&darr;</span> : <span>&uarr;</span>}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'combination')}>
                Combination {props.sortField === 'combination' ? <small>{props.sort === 'asc' ?
                <span>&darr;</span> : <span>&uarr;</span>}</small> : null}
            </th>
            <th onClick={props.onSort.bind(null, 'combinationFunction')}>
                Function Combination {props.sortField === 'combinationFunction' ? <small>{props.sort === 'asc' ?
                <span>&darr;</span> : <span>&uarr;</span>}</small> : null}
            </th>
        </tr>
        </tbody>
            <tbody>
            { props.hotKeys.map((hotKey) => (
                <tr key={hotKey.id}>
                    <td>{hotKey.id}</td>
                    <td>{hotKey.combination}</td>
                    <td>{hotKey.combinationFunction}</td>
                </tr>
                )) }
            </tbody>
        </table>
    );
}


KeyList.propTypes = {
    hotKeys: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default KeyList;