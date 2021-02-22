import React from 'react'

export default props => {
    const table = props.data.table;
    const head = props.data.head;

    const sortFuncView = () => props.sort === 'asc' ?
        <span>&darr;</span> : <span>&uarr;</span>;

    const sortFunc = (index) => {
        if (props.data.columns[index].sorting) {
            return props.onSort.bind(null, index);
        }
    };

    return (
        <table className="table" border = "1">
            <thead>
            <tr>
                {
                    head.map((val, index) => (
                        <th onClick={sortFunc(index)} key={index}>{val.value}{(props.sortField === index) ? sortFuncView() : null}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                table.map((row, index) =>
                <tr key={index} >
                    {row.map(cell =>
                        <td key={cell.value} >{cell.value}</td>
                    )}
                </tr>
            )}
            </tbody>
        </table>
    )
}
