import React, { Component } from 'react';
import NavLinkComplex from "./navLinkComplex";

export default class AboutComplex extends Component{
    render(){
        return(
            <div className="about_complex grid">
                <NavLinkComplex/>
                <div className="about_complex_content grid">
                    <div id="architecture" className="about_complex_content_left grid" >
                        <h1>Архитектура</h1>
                        <p>
                            Оригинальная архитектура жилого комплекса бизнесс-класса "Первомайская" формирует современный стиль жизни
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{backgroundImage: `url(https://pp.userapi.com/c840337/v840337932/8cc6c/008SV-VyirU.jpg)`}}/>

                    <div id="accomplishment" className="about_complex_content_left grid">
                        <div className="left_content_b grid">
                            <b className="active">Входные группы</b>
                            <b className="passive">Учебный центр</b>
                        </div>
                        <h1>Благоустройство</h1>
                        <p>
                            Запроектированные больше окна, которые пропускают много солнечного цвета, наполняют Ваши квартиры теплотой и уютом
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{ backgroundImage: 'url(https://pp.userapi.com/c840337/v840337932/8cc7e/EI3x_7w1Tko.jpg)' }}/>

                    <div id="security" className="about_complex_content_left grid">
                        <h1>Безопасность</h1>
                        <p>
                            Современный двор европейского уровня - территория для детей, игр на свежем воздухе и вечерних...
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{ backgroundImage: 'url(https://pp.userapi.com/c840337/v840337932/8cc87/jkeqoGUmhDU.jpg)' }}/>

                    <div id="infrastructure" className="about_complex_content_left grid">
                        <h1>Инфраструтура</h1>
                        <p>
                            Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интелегенции, но при этом чувствовать ритм мегаполиса
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{ backgroundImage: 'url(https://pp.userapi.com/c840337/v840337932/8cc90/-ULDceX_-jQ.jpg)' }}/>

                    <div id="engineering" className="about_complex_content_left grid">
                        <h1>Инженерия</h1>
                        <p>
                            Оригинальная архитектура жилого комплекса бизнесс-класса "Первомайская" формирует современный стиль жизни
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{ backgroundImage: 'url(https://pp.userapi.com/c840337/v840337932/8cc99/O8MpBfQGvzY.jpg)' }}/>

                    <div id="transportAvailability" className="about_complex_content_left grid">
                        <h1>Транспортная доступность</h1>
                        <p>
                            Жилой комплекс "Первомайская" расположен в престижном Академическом районе
                        </p>
                    </div>
                    <div className="about_complex_content_right" style={{ backgroundImage: 'url(https://pp.userapi.com/c840337/v840337932/8cca2/ASHCFXXpHoc.jpg)' }}/>
                </div>
            </div>
        )
    }
}