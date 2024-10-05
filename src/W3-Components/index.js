import IconBar from "./IconBar"
import MenuIcon from "./MenuIcon"
import React from "react"

const components = {
    "Icon Bar": IconBar,
    "Menu Icon": function (props) {
        return React.createElement(MenuIcon, props);
    }
}

export default components