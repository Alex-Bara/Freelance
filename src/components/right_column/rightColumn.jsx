import React from 'react';
import { NavLink } from 'react-router-dom';

const token = () => {
  if(5 % 2 === 0){
    return <span className="token">32 токена</span>
  }
  else return <span className="token">3 токена</span>
}

const RightColumn = () => {
  return(
  <div className="rightColumn">
    <h2>Предложения:</h2>
    <div className="active__props">
      <span className='active-prop'>4 активных предложений</span> 
    </div>
    <div className="send__props">
      <span className='send-prop'>1 заявка отправлена</span>
    </div>
    <div className="tokens">
      {token()}
    </div>
    <NavLink to='/create' className="projectCreate__btn">
      Создать проект
    </NavLink>
  </div>
  
  )
}

export default RightColumn;