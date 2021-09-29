import React from "react";
import App from "./App";
import {initialize} from "./redux/appReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initialized, isFetching, isLogined} from "./redux/selectors";
import { withAuthRedirect } from "./hoc/withAuthRedirect";


class AppContainer extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        return <App {...this.props}/>
    }
}



const mapStateToProps = (state) => {
    return {
        isFetching: isFetching(state),
        isLogined: isLogined(state),
        initialized: initialized(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize})
)(AppContainer);
