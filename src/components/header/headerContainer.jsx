import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer"




class HeaderContainer extends React.Component{

  render() {
    return <Header {...this.props} logout={this.props.logout}/>
  }
}

const HeaderC = connect(null, {logout})(HeaderContainer);

export default HeaderC;