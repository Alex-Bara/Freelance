import React from "react"
import loading from "../../loading.gif";

const Preloader = () => {
    return(
        <div className='preloaderContainer'>
            <img src={loading} className='preloader' alt='loading...'/>
        </div>
    )
}

export default Preloader;