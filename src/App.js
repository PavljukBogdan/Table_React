import React, {Component} from 'react'
import KeyList from './Table/KeysList';
import _ from 'lodash';

const  hotKeys = [
    { id: 1, filter: 'Editing', combination:  'Ctrl + Space', combinationFunction: 'Basic code completion'},
    { id: 2, filter: 'Editing', combination:  'Alt + Enter', combinationFunction: 'Show intention actions and quick-fixes'},
    { id: 3, filter: 'Editing', combination:  'Ctrl + P', combinationFunction: 'Parameter info (within method call arguments)'},
    { id: 4, filter: 'Editing', combination:  'Ctrl + Q', combinationFunction: 'Quick documentation lookup'},
    { id: 5, filter: 'Editing', combination:  'Ctrl + mouse over code', combinationFunction: 'Brief Info'},

    { id: 6, filter: 'Multiple carets and selections', combination:  'Alt + Click', combinationFunction: 'Add or remove caret'},
    { id: 7, filter: 'Multiple carets and selections', combination:  'Shift + Ctrl + Alt + J', combinationFunction: 'Select all occurrences'},
    { id: 8, filter: 'Multiple carets and selections', combination:  'Alt + J', combinationFunction: 'Select next occurrence'},
    { id: 9, filter: 'Multiple carets and selections', combination:  'Alt + Shift + J', combinationFunction: 'Unselect occurrence'},
    { id: 10, filter: 'Multiple carets and selections', combination:  'Esc', combinationFunction: 'Unselect all occurrences or carets'},

    { id: 11, filter: 'Running', combination:  'Alt + Shift + F10', combinationFunction: 'Select configuration and run'},
    { id: 12, filter: 'Running', combination:  'Alt + Shift + F9', combinationFunction: 'Select configuration and debug'},
    { id: 13, filter: 'Running', combination:  'Shift + F10', combinationFunction: 'Run'},
    { id: 14, filter: 'Running', combination:  'Shift + F9', combinationFunction: 'Run context configuration from editor'},
    { id: 15, filter: 'Running', combination:  'Ctrl + Shift + F10', combinationFunction: 'Rerun tests'},

    { id: 16, filter: 'Debugging', combination:  'F8', combinationFunction: 'Step over'},
    { id: 17, filter: 'Debugging', combination:  'F7', combinationFunction: 'Step into'},
    { id: 18, filter: 'Debugging', combination:  'Shift + F7', combinationFunction: 'Smart step into'},
    { id: 19, filter: 'Debugging', combination:  'Shift + F8', combinationFunction: 'Step out'},
    { id: 20, filter: 'Debugging', combination:  'Alt + F9', combinationFunction: 'Run to cursor'},

    { id: 21, filter: 'Navigation', combination:  'Ctrl + B , Ctrl + Click', combinationFunction: 'Go to declaration '},
    { id: 22, filter: 'Navigation', combination:  'Ctrl + N', combinationFunction: 'Go to class'},
    { id: 23, filter: 'Navigation', combination:  'Ctrl + Shift + N', combinationFunction: 'Go to file'},
    { id: 24, filter: 'Navigation', combination:  'Ctrl + Alt + Shift + N', combinationFunction: 'Go to symbol'},
    { id: 25, filter: 'Navigation', combination:  'Alt + Right', combinationFunction: 'Go to next editor tab'},

    { id: 26, filter: 'Search/Replace', combination:  'Ctrl + F', combinationFunction: 'Find'},
    { id: 27, filter: 'Search/Replace', combination:  'F3', combinationFunction: 'Find next'},
    { id: 28, filter: 'Search/Replace', combination:  'Shift + F3', combinationFunction: 'Find previous'},
    { id: 29, filter: 'Search/Replace', combination:  'Ctrl + Shift + F', combinationFunction: 'Find in path'},
    { id: 30, filter: 'Search/Replace', combination:  'Ctrl + R', combinationFunction: 'Replace'},
    { id: 31, filter: 'Search/Replace', combination:  'Ctrl + Shift + R', combinationFunction: 'Replace in path'},


    { id: 32, filter: 'Usage Search', combination:  'Alt + F7', combinationFunction: 'Find usages'},
    { id: 33, filter: 'Usage Search', combination:  'Ctrl + F7', combinationFunction: 'Find usages in file'},
    { id: 34, filter: 'Usage Search', combination:  'Ctrl + Shift + F7', combinationFunction: 'Highlight usages in file'},
    { id: 35, filter: 'Usage Search', combination:  'Ctrl + Alt + F7', combinationFunction: 'Show usages'},

    { id: 36, filter: 'Refactoring', combination:  'Ctrl + Alt + Shift +T', combinationFunction: 'Refactor this'},
    { id: 37, filter: 'Refactoring', combination:  'F5 / F6', combinationFunction: 'Copy / Move'},
    { id: 38, filter: 'Refactoring', combination:  'Alt + Delete', combinationFunction: 'Safe Delete'},
    { id: 39, filter: 'Refactoring', combination:  'Shift + F6', combinationFunction: 'Rename'},
    { id: 40, filter: 'Refactoring', combination:  'Ctrl + F6', combinationFunction: 'Change function signature'},

    { id: 41, filter: 'VCS/Local History', combination:  'Alt + BackQuote (`)', combinationFunction: '’VCS’ quick popup'},
    { id: 42, filter: 'VCS/Local History', combination:  'Ctrl + K', combinationFunction: 'Commit project to VCS'},
    { id: 43, filter: 'VCS/Local History', combination:  'Ctrl + T', combinationFunction: 'Update project from VCS'},
    { id: 44, filter: 'VCS/Local History', combination:  'Alt + Shift + C', combinationFunction: 'View recent changes'},

    { id: 45, filter: 'General', combination:  'Double Shift', combinationFunction: 'Search everywhere'},
    { id: 46, filter: 'General', combination:  'Ctrl + Shift + A', combinationFunction: 'Find Action'},
    { id: 47, filter: 'General', combination:  'Alt + #[0-9]', combinationFunction: 'Open corresponding tool window'},
    { id: 48, filter: 'General', combination:  'Ctrl + Shift + F12', combinationFunction: 'Toggle maximizing editor'},
    { id: 49, filter: 'General', combination:  'Alt + Shift + F', combinationFunction: 'Add to Favorites'},
    { id: 50, filter: 'General', combination:  'Alt + Shift + I', combinationFunction: 'Inspect current file with current profile'},
];

class App extends Component {

    state = {
        data: [],
        sort: 'asc', //desc
        sortField: 'id'
    }



    componentDidMount() {
        const data = hotKeys; 
        this.setState({
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })
    }

    



    onSort = sortField => {

        const clonedKeys = this.state.data.concat();
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedKeys = _.orderBy(clonedKeys, sortField,sortType);

        this.setState({
           data: orderedKeys,
            sort: sortType,
            sortField: sortField
        });
    }


    render() {
        return (
            <div className = 'wrapper'>
                <h1>Webstorm hot keys</h1>
                <KeyList
                    hotKeys = { this.state.data }
                    onSort = {this.onSort}
                    sort = {this.state.sort}
                    sortField = {this.state.sortField}
                />
            </div>
            )
    }

}
export default App;
