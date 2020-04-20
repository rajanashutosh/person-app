import React from 'react';
import "./Person.css";
import AuthContext from '../../../context/AuthenticationContext';

const Person = (props) => {
    return (
        <React.Fragment>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
            </AuthContext.Consumer>
            <div className={"Person"}>
                <p onDoubleClick={props.click}>
                    Name: {props.name} <br/>Age: {props.age} <br/> Gender: {props.gender}<br/>{props.children}
                    <input type="text" onChange={props.changed} value={props.name}/>
                </p>
            </div>
        </React.Fragment>

    );
};

export default Person;