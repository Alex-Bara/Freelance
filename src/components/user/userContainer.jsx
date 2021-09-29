import User from './user'
import { connect } from 'react-redux';
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UserC extends React.Component {
  render = () => {
    return <User {...this.props}/>
  };
}

const mapStateToProps = (state) => {
  return {
    name: state.auth.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UserC);