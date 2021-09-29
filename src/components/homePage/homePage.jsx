import React from "react";
import s from './style/homePage.module.css'
import {NavLink} from "react-router-dom";

const HomePage = (props) => {
    return(
        <div className={s.homePage}>
            <div>
                <h1 className={s.title}>Oops =(</h1>
                Вы не авторизованы - <NavLink to={'/login'}>Войти</NavLink>  или <NavLink to={'/reg'}>Зарегестрироваться</NavLink>
            </div>
        </div>
    )
}

export default HomePage;