import React from "react"
import IconBar from "./IconBar"
import MenuIcon from "./MenuIcon"
import Accordian from "./Accordian"
import Tabs from "./Tabs"
import VerticalTabs from "./VerticalTabs"
import TabHeaders from "./TabHeaders"
import FullPageTabs from "./FullPageTabs"
import HoverTabs from "./HoverTabs"
import TopNavigation from "./TopNavigation"
import ResponsiveTopNav from "./ResponsiveTopNav"
import SplitNav from "./SplitNav"
import NavWithIcons from "./NavWithIcons"
import SearchFilterMenu from "./SearchFilterMenu"

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
    "Full Page Tabs": createComponent(FullPageTabs),
    "Hover Tabs": createComponent(HoverTabs),
    "Top Navigation": createComponent(TopNavigation),
    "Responsive Top Nav": createComponent(ResponsiveTopNav),
    "Split Navigation": createComponent(SplitNav),
    "Nav With Icons": createComponent(NavWithIcons),
    "Search / Filter Menu": createComponent(SearchFilterMenu),
}

export default components