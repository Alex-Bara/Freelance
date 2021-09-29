import { connect } from 'react-redux';
import './css/projectCreate.css';
import ProjectCreate from './projectCreate'
import React from "react";
import {addWork, updateText, updateTitle} from "../../redux/projectCreateReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProjectCreateContainer extends React.Component {

  render() {
    return <ProjectCreate {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addJob: () => {
      dispatch(addWork())
    },
    changeText: (text) => {
      dispatch(updateText(text))
    },
    titleChange: (titleText) => {
      dispatch(updateTitle(titleText))
    }
  }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addWork}))
(ProjectCreateContainer);