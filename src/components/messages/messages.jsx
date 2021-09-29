import React from 'react';
import {NavLink} from 'react-router-dom';
import m from './css/messages.module.css'


function Messages() {


  return <div className={m.messages}>
    <div className={m.messagesUsers}>
      <NavLink to={'/messages/id=2'} className={m.users__item}>
        <div className={m.userLogo}>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
              alt="user" width='50px' height='50px'/>
        </div>
        <div className={m.user__info}>
          <h2>Name</h2>
          <span>online</span>
        </div>
      </NavLink>
      <NavLink to='/' className={m.users__item}>
        <div className={m.userLogo}>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
              alt="user" width='50px' height='50px'/>
        </div>
        <div className={m.user__info}>
          <h2>Name</h2>
          <span>online</span>
        </div>
      </NavLink>
    </div>
    <div className={m.messagesBody}>
      <div className={m.user_massage}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1024px-OOjs_UI_icon_userAvatar-constructive.svg.png"
            alt="user" width='30px' height='30px'/>
        <span>message</span>
      </div>
      <MessageForm/>
    </div>
  </div>
}


const MessageForm = (props) => {
  return <form>
    <input type="text" placeholder={'your message...'}/>
  </form>
}

export default Messages;