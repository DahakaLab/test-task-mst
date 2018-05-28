import React, { Component } from 'react';

export default class NotFound extends Component{
    render(){
        return(
            <div className="not_found content">
                <div className="not_found_content_left">
                    <div className="contacts ">
                        <h2>404</h2>
                        <article>
                            Такой страницы не существует.
                            Если вы абсолютно уверены что делаете все правильно,
                            значит адрес был изменен, страница удалена вовсе или еще не создана.
                        </article>
                    </div>
                </div>
                <div className="about_content_right" style={{backgroundImage: `url(https://sun9-1.userapi.com/c840525/v840525823/583f0/aTBNRCfROao.jpg)`}}/>
            </div>
        )
    }
}