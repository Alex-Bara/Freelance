import React, {useState} from 'react';
import './css/header.css';
import logo from './img/logo.png';
import notifi from './img/notifi.png';
import {NavLink} from 'react-router-dom';
import Menu from "./menu";


const Header = (props) => {

    let [menuVisibility, setMenuVisibility] = useState(false)
    const visibleMenu = () => {
        setMenuVisibility(true)
    }
    const hiddenMenu = () => {
        setMenuVisibility(false)
    }

    return (
        <div className="header">
            <div className="container">
            {menuVisibility ? <Menu hiddenMenu={hiddenMenu} logout={props.logout}/> : null}
                <div className="header__inner">

                    <div className="user">
                        <button className="user__img" onClick={() => {
                            visibleMenu(true)
                        } }>
                        </button>
                        <NavLink to="#" className="help-link">?</NavLink>
                        <NavLink to="#" className="notifications-link">
                            <img src={notifi} alt="notiifications" width='20px' height='24px'/>
                        </NavLink>
                    </div>

                    <div className="search-blok">
                        <input type="text" placeholder="Поиск.."/>
                        <button type="search" className="search-btn">
                            <i className="fa fa-search"/>
                        </button>
                    </div>

                    <div className="nav">
                        <NavLink to="/find-work" className="nav-link">Найти работу</NavLink>
                        <NavLink to="/contracts" className="nav-link">Контракты</NavLink>
                        <NavLink to="/viplati" className="nav-link">Выплаты</NavLink>
                        <NavLink to="/messages" className="nav-link">Сообщения</NavLink>
                    </div>

                    <NavLink to='/' className="logo">
                        <img src={logo} alt='logo'/>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Header;