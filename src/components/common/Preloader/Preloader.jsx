import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader = (props) => {
    return (
        <div>
            <img alt='preloader' src={preloader}/>
        </div>
    )
}

export default Preloader;