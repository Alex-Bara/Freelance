import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import { Link } from 'react-router-dom';


const Reg = (props) => {
    let [count, setCount] = useState(null)
    return(
        <div>
            <p>Вы нажали {count} раз</p>
            <div onClick={() => {setCount(count+1)}} >Click</div>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default connect(null, null)(Reg)