import React from 'react';
import "./Person.css";

const Person = (props) => {
    return (
        <div className={"Person"}>
            <p onDoubleClick={props.click}>
                Name: {props.name} <br/>Age: {props.age} <br/> Gender: {props.gender}<br/>{props.children}
                <input type="text" onChange={props.changed} value={props.name}/>
            </p>
        </div>
    );
};

export default Person;