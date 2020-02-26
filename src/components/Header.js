import React from 'react';


function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{props.name} Employee Directory</span>
        </nav>
    )
}

export default Header;
