import React from 'react';
import { connect } from 'react-redux';
import Messages from './messages';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class MessagesContainer extends React.Component{
  render() {
    return<Messages {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    
  }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer);
