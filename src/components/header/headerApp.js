import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderApp extends Component {
    render(){
        return(
            <header className="header grid">
                <div className="header_buttons grid">
                    <Link className="header_button" to="/">О комплексе</Link>
                    <Link className="header_button" to="/price">Особенности</Link>
                    <Link className="header_button" to="/client">Пентхаусы</Link>
                    <Link className="header_button" to="/about">Выбрать квартиру</Link>
                </div>
                <h3>8-888-888-88-88</h3>
            </header>
        )
    }
}