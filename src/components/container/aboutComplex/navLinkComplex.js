import React, { Component } from 'react';

export default class NavLinkComplex extends Component {
    render(){
        return(
            <div className="navlink_complex">
                <h3>Первомайская</h3>

                <div className="navlink_complex_buttons grid">
                    <a type="button" className="navlink_complex_button" href="#architecture">Архитектура</a>
                    <a type="button" className="navlink_complex_button" href="#accomplishment">Благоустройство</a>
                    <a type="button" className="navlink_complex_button" href="#security">Безопасность</a>
                    <a type="button" className="navlink_complex_button" href="#infrastructure">Инфроструктура</a>
                    <a type="button" className="navlink_complex_button" href="#engineering">Инженерия</a>
                    <a type="button" className="navlink_complex_button" href="#transportAvailability">Транспортная доступность</a>
                </div>
            </div>
        )
    }
}