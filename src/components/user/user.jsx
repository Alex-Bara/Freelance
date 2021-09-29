import React from 'react'
import style from './css/user.module.css'

const User = (props) => {
    return (
        <div className={style.userInfo}>
            <h2 className={style.userName}>
                {props.name}
            </h2>
        </div>
    )
}


export default User;