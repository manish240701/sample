import React from "react";
import "./Heading.css";

const Heading = ({head,sub}) => {
    return(
        <div className="headings-container text-center">
                <p className="headings-container-p">{sub}
                    <h1 className="headings-container-h1">{head}</h1>
                </p>
        </div>
    )
}

export default Heading;