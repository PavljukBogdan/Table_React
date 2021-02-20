import React, {Component} from 'react'
import Loader from './Loader/Loader'
import Table from "./Table/Table";
import _ from 'lodash'
import DetailRowView from "./DetailRowView/DetailRowView";

class App extends Component {

    data = {
        columns: [{ // has N elements (N columns)
            title: "id",
            type: "number",
            filtering: true, // has filtering input
            sorting: true, // has sorting arrows
            style: {} // css styles
        }, { // has N elements (N columns)
            title: "First Name",
            type: "string",
            filtering: true, // has filtering input
            sorting: false, // has sorting arrows
            style: {} // css styles
        }, { // has N elements (N columns)
            title: "Last Name",
            type: "string",
            filtering: true, // has filtering input
            sorting: false, // has sorting arrows
            style: {} // css styles
        }, { // has N elements (N columns)
            title: "email",
            type: "string",
            filtering: false, // has filtering input
            sorting: false, // has sorting arrows
            style: {} // css styles
        }],
        cells: [{
            value: 1,
            style: {}
        },{
            value: 'John',
            style: {}
        },{
            value: 'Doe',
            style: {}
        },{
            value: 'Doe@gmail.com',
            style: {}
        },{
            value: 2,
            style: {}
        },{
            value: 'John2',
            style: {}
        },{
            value: 'Doe2',
            style: {}
        },{
            value: 'Doe@gmail.com',
            style: {}
        },{
            value: 3,
            style: {}
        },{
            value: 'John3',
            style: {}
        },{
            value: 'Doe3',
            style: {}
        },{
            value: 'Doe@gmail.com',
            style: {}
        },{
            value: 4,
            style: {}
        },{
            value: 'John4',
            style: {}
        },{
            value: 'Doe4',
            style: {}
        },{
            value: 'Doe@gmail.com',
            style: {}
        }]
    }

    state = {
        isLoading: false,
        data: this.data,
        sort: 'asc', //desc
        sortField: 'id',
        row: null
    }

    // async componentDidMount() {
    //     const response = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&' +
    //         'firstName={firstName}&' +
    //         'lastName={lastName}&email={email}&' +
    //         'phone={phone|(xxx)xxx-xx-xx}&' +
    //         'address={addressObject}&description={lorem|32}')
    //     const data = await response.json(); //отримуємо файли в json
    //
    //     this.setState({
    //         isLoading: false,
    //         data: _.orderBy(data, this.state.sortField, this.state.sort)
    //     })
    // }

    onSort = sortField => {
        const clonedData = this.state.data.concat(); //копіюємо масив
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc' //міняємо варіант сортування

        const orderedData = _.orderBy(clonedData, sortField, sortType);

        this.setState({
            data: orderedData,
            sort: sortType,
            sortField

        })

    }

    onRowSelect = row => {
        this.setState({row});
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
