import React from 'react';


function Title(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{props.name} Employee Directory</span>
        </nav>
    )
}

export default Title;
