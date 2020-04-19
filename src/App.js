import React from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends React.Component {
    state = {
        persons: [
            {name: "Ashutosh", age: 34, gender: "Male", id: "1"},
            {name: "Girl", age: 30, gender: "Female", id: "2"}
        ],
        showPersonStatus: false
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
                    {
                        this.state.persons.map((person, index) => {
                            return <Person name={person.name} age={person.age}
                                           gender={person.gender}
                                           changed={(event) => this.nameChangedHandler(event, person.id)}
                                           click={this.deletePersonHandler.bind(index)}
                                           key={person.id}
                            />
                        })
                    }
                </div>
            );
        }
        return null;
    }

    render() {
        const persons = this.personHandler(this.state.showPersonStatus)
        return (
            <div className="App">
                <h2>Person React App</h2>
                <button name={"btnSwitchName"} onClick={this.togglePersonHandler}>Switch Person</button>
                {persons}
            </div>
        );
    }
}

export default App;
