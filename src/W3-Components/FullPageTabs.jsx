import { tabColors } from "./tabData"
import { useState } from "react"

const tabContent = {
    "Home": "Home is where the heart is..",
    "News": "Some news this fine day!",
    "Contact": "Get in touch, or swing by for a cup of coffee.",
    "About": "Who we are and what we do."
}

const FullPageTabs = () => {

    const [activeTab, setActiveTab] = useState("Home")
    const [activeColor, setActiveColor] = useState(tabColors.Red)

    const handleActiveTab = (name) => {
        setActiveTab(name)
    }

    const handleTabColor = (key) => {
        let color
        switch (key) {
            case "Home":
                color = tabColors.Red
                break
            case "News":
                color = tabColors.Blue
                break
            case "Contact":
                color = tabColors.Green
                break
            case "About":
                color = tabColors.Orange
                break
        }
        setActiveColor(color)
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-full mt-10">

            <div className="flex justify-center items-center w-full">

                {Object.keys(tabContent).map((name, index) => (

                    <button
                        key={index}
                        onClick={() => {
                            handleActiveTab(name)
                            handleTabColor(name)
                        }}
                        style={{
                            backgroundColor: activeTab === name ? activeColor : "",
                            color: activeTab === name ? "white" : ""
                        }}
                        className="bg-greyLight text-xl p-4 w-full hover:bg-[#e6e6e6]">
                        {name}
                    </button>
                ))}

            </div>

            <div className="w-full h-full">
                <div
                    style={{ backgroundColor: activeColor }}
                    className="w-full h-full">
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <h1 className="mb-10 text-4xl text-white">{activeTab}</h1>
                        <p className="text-xl text-white">{tabContent[activeTab]}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FullPageTabs
