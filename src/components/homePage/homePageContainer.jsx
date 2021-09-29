import React from "react";
import HomePage from "./homePage";
import {connect} from "react-redux";

class Home extends React.Component {
    render() {
        return <HomePage {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);