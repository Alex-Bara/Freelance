import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return{
        isLogined: state.auth.isLogined,
        initialized:state.app.initialized
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isLogined) {return <Redirect to={'/'}/>}
            else return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect,{})(RedirectComponent);
}