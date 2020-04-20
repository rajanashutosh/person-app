import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import AuthContext from '../context/AuthenticationContext'

class App extends React.Component {
    state = {
        persons: [
            {name: "Ashutosh", age: 34, gender: "Male", id: "1"},
            {name: "Girl", age: 30, gender: "Female", id: "2"}
        ],
        showPersonStatus: false,
        authenticated: true
    }

    togglePersonHandler = () => {
        const personStatus = this.state.showPersonStatus
        this.setState({showPersonStatus: !personStatus})
    }

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });
        const person = this.state.persons[personIndex];
        person.name = event.target.value
        const persons = [
            ...this.state.persons
        ]
        persons[personIndex] = {...person}
        this.setState({persons: persons})
    }

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    }

    personHandler = (status) => {
        if (status) {
            return (
                <div>
                    <Persons persons={this.state.persons} changed={this.nameChangedHandler}
                             clicked={this.deletePersonHandler}/>
                </div>
            );
        }
        return null;
    }

    loginHandler = () => {
        this.setState({
            authenticated: false
        })
    }

    render() {
        return (
            <div className="App">
                <h2>Person React App</h2>
                <button name={"btnSwitchName"} onClick={this.togglePersonHandler}>Switch Person</button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        isActive: this.state.showPersonStatus,
                        authentication: this.loginHandler
                    }}>
                    {this.personHandler(this.state.showPersonStatus)}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
