import React from "react";
import { ReactComponent as CheckSVG } from "/Users/jhonzuluaga/Documents/react-js/curso_react_basic/src/assets/svg/check.svg";
import { ReactComponent as DeleteSVG } from "/Users/jhonzuluaga/Documents/react-js/curso_react_basic/src/assets/svg/delete.svg";
import "./css/TodoIcon.css"

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
}

function TodoIcon({type, color}) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon }