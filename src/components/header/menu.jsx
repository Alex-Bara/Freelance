import React from "react"
import './css/header.css'
import {NavLink} from "react-router-dom";


const Menu = (props) => {
    return (
        <div className='userMenuContainer' onClick={props.hiddenMenu}>
            <div className='userMenu'>
                <div className='closeMenu'>
                    <button className="closeMenu_btn" onClick={props.hiddenMenu}>
                        X
                    </button>
                    <NavLink to='/user' className="userMenu__item">
                        User
                    </NavLink>
                    <NavLink to='/user' className="userMenu__item">
                        User
                    </NavLink>
                    <NavLink to='/user' className="userMenu__item">
                        User
                    </NavLink>
                    <div className={'logout'}>
                        <button onClick={props.logout}>Выйти</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Menu;