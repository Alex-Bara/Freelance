import React from 'react';
import {connect} from 'react-redux';
import FindWork from './FindWork';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class FindWorkContainer extends React.Component {
    // state = {
    //     workSide: false
    // }
    // activeWorkSide (){
    //     this.setState({
    //         workSide: true
    //     })
    // }
    // deactiveWorkSide (){
    //     this.setState({
    //         workSide: false
    //     })
    // }
    getContent(onClick) {
        return this.props.jobs.map((obj, index) =>
            <div className="work__item" tabIndex={index} key={index} onClick={onClick}>
                {obj.title}
                {obj.info}
                {obj.text}
                {obj.skills}
            </div>
        );
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.workSide !== this.state.workSide ){
    //         this.setState({
    //             workSide: this.state.workSide
    //         })
    //     }
    // }

    render() {
        return <FindWork {...this.props} getContent={this.getContent.bind(this)}
        // workSide={this.state.workSide}
        // deactiveWorkSide={this.deactiveWorkSide.bind(this)}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.findWork.isFetching,
        jobs: state.projectCreate.findWork.jobs
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps)
)(FindWorkContainer);