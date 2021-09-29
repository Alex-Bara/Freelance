import React from 'react'

const WorkSide = (props) => {
    const getContent = (e) => {
        let a = props.getContent();
        return <div>
                <div>{a[0].props.children[0].props.children}</div>
                <div>{a[0].props.children[1].props.children}</div>
                <div>{a[0].props.children[2].props.children}</div>
            </div>
    }
    return (
        <div className="workSideContainer">
            <div className="workSide">
                <button className="workSide-close" onClick={props.deactivateWorkSide}>&lt;</button>
                {getContent()}
            </div>
        </div>
    )
}

export default WorkSide;