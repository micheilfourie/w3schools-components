import React from "react"
import IconBar from "./IconBar"
import MenuIcon from "./MenuIcon"
import Accordian from "./Accordian"
import Tabs from "./Tabs"
import VerticalTabs from "./VerticalTabs"
import TabHeaders from "./TabHeaders"

const createComponent = (component) => {
    return function (props) {
        return React.createElement(component, props);
    }
}

const components = {
    "Icon Bar": createComponent(IconBar),
    "Menu Icon": createComponent(MenuIcon),
    "Accordian": createComponent(Accordian),
    "Tabs": createComponent(Tabs),
    "Vertical Tabs": createComponent(VerticalTabs),
    "Tab Headers": createComponent(TabHeaders),
}

export default components