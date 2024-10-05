import IconBar from "./IconBar"
import MenuIcon from "./MenuIcon"
import Accordian from "./Accordian"
import React from "react"

const components = {
    "Icon Bar": IconBar,
    "Menu Icon": function (props) {
        return React.createElement(MenuIcon, props);
    },
    "Accordian": function (props) {
        return React.createElement(Accordian, props);
    },
}

export default components