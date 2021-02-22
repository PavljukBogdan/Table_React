import React, {Component} from 'react'
import Loader from './Loader/Loader'
import Table from "./Table/Table";
import DetailRowView from "./DetailRowView/DetailRowView";

class App extends Component {
    data = {
        columns: [{
            type: "number",
            filtering: true,
            sorting: true,
            style: {}
        }, {
            type: "string",
            filtering: true,
            sorting: false,
            style: {}
        }, {
            type: "string",
            filtering: true,
            sorting: false,
            style: {}
        }, {
            type: "string",
            filtering: false,
            sorting: true,
            style: {}
        }],
        cells: [{
            value: "id",
            style: {}
        }, {
            value: 'First Name',
            style: {}
        }, {
            value: 'Last Name',
            style: {}
        }, {
            value: 'Email',
            style: {}
        }, {
            value: 1,
            style: {}
        }, {
            value: 'John',
            style: {}
        }, {
            value: 'Doe',
            style: {}
        }, {
            value: '1Doe@gmail.com',
            style: {}
        }, {
            value: 2,
            style: {}
        }, {
            value: 'John2',
            style: {}
        }, {
            value: 'Doe2',
            style: {}
        }, {
            value: '2Doe@gmail.com',
            style: {}
        }, {
            value: 3,
            style: {}
        }, {
            value: 'John3',
            style: {}
        }, {
            value: 'Doe3',
            style: {}
        }, {
            value: '3Doe@gmail.com',
            style: {}
        }, {
            value: 4,
            style: {}
        }, {
            value: 'John4',
            style: {}
        }, {
            value: 'Doe4',
            style: {}
        }, {
            value: '4Doe@gmail.com',
            style: {}
        }]
    }

    state = {
        isLoading: false,
        data: null,
        sort: 'asc', //desc
        sortField: 0,
        row: null
    }

    constructor(props) {
        super(props);
        this.transformData();
    }

    onSort = sortFieldIndex => {
        const clonedData = this.state.data.table.concat(); //копіюємо масив
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc' //міняємо варіант сортування

        clonedData.sort((a, b) => {
            const reverse = sortType === 'asc' ? 1 : -1;
            if (a[sortFieldIndex].value > b[sortFieldIndex].value) return reverse;
            if (a[sortFieldIndex].value < b[sortFieldIndex].value) return -reverse;
            return 0;

        });

        this.setState({
            data: {
                ...this.state.data,
                table: clonedData
            },
            sort: sortType,
            sortField: sortFieldIndex
        })

    }

    onRowSelect = row => {
        this.setState({row});
    }

    transformData() {
        const cells = this.data.cells;
        const columns = this.data.columns;
        const columnsCount = this.data.columns.length;
        const rowsCount = Math.ceil(cells.length / columns.length);
        let table = [];
        for (let i = 0; i < rowsCount; i++) {
            table.push(cells.slice(i * columnsCount, (i + 1) * columnsCount))
        }

        this.state.data = {
            table,
            head: table.shift(),
            columns: this.data.columns
        };
    }


    render() {
        return (
            <div className="container">
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <Table
                            data={this.state.data}
                            onSort={this.onSort}
                            sort={this.state.sort}
                            sortField={this.state.sortField}
                            onRowSelect={this.onRowSelect}
                        />
                }
                {
                    this.state.row
                        ? <DetailRowView person={this.state.row}/>
                        : null
                }
            </div>
        );
    }
}

export default App;
