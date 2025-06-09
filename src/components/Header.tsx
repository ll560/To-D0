import React from 'react';
import '../styles/headers.css'

interface HeaderProps {
    title: string;
}

function Header({title}: HeaderProps) {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    );
}

export default Header;