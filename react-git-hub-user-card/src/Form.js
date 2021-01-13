import React from 'react';

function Form(props) {
    return (
        <div>
            <input onChange={props.handleChange} type="text" placeholder="Search by GitHub UserName"/>
            <button onClick={props.handleClick}>Search Users</button>
        </div>
    )
}

export default Form;