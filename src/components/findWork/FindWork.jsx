import React, {useState} from 'react'
import WorkSide from "./side/workSide";

function FindWork(props) {


    let [workSide, setWorkSide] = useState(false)

    const activateWorkSide = () => {
        return setWorkSide(true)
    }
    const deactivateWorkSide = () => {
        return setWorkSide(false)
    }

    return (

        <div className="findWork">
            <div className="container">
                <div className="findWork__inner">
                    {props.getContent(activateWorkSide)}
                    {workSide ? <WorkSide getContent={props.getContent} deactivateWorkSide={deactivateWorkSide}/> : null}
                </div>
            </div>
        </div>
    )
}

export default FindWork;