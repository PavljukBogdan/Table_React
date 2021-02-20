import React from 'react'

export default props => (
    <table className="table">
        <thead>
        <tr>
            <td onClick={props.onSort.bind(null, 'id')}>ID{(props.sortField === 'id') ? props.sort === 'asc' ? <span>&darr;</span> : <span>&uarr;</span> : null}</td>
            <td onClick={props.onSort.bind(null, 'firstName')}>First Name{props.sortField === 'firstName' ? props.sort === 'asc' ? <span>&darr;</span> : <span>&uarr;</span> : null}</td>
            <td onClick={props.onSort.bind(null, 'lastName')}>Last Name{props.sortField === 'lastName' ? props.sort === 'asc' ? <span>&darr;</span> : <span>&uarr;</span> : null}</td>
            <td onClick={props.onSort.bind(null, 'email')}>email{props.sortField === 'email' ? props.sort === 'asc' ? <span>&darr;</span> : <span>&uarr;</span> : null}</td>
            <td onClick={props.onSort.bind(null, 'phone')}>phone{props.sortField === 'phone' ? props.sort === 'asc' ? <span>&darr;</span> : <span>&uarr;</span> : null}</td>
        </tr>
        </thead>
            <tbody>
            {new Array(Math.ceil(props.data.cells.length / props.data.columns.length)).fill(0).forEach((v, index) => (

                <tr key={props.data.cells[props.data.columns.length * index].id} onClick={props.onRowSelect.bind(null, props.data.cells[props.data.columns.length * index])}>
                    {props.data.cells.map((item, index) => (
                        <td>{item.value}</td>
                ))}
                </tr>
            ))
            }
            </tbody>
    </table>
)