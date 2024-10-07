import { useState, useEffect } from "react"
import { tabContent, tabColors } from "./tabData"

const TabHeaders = () => {

    const [activeTab, setActiveTab] = useState("London")
    const [activeColor, setActiveColor] = useState("")

    useEffect(() => {
        const handleTabColor = (key) => {

            let color;

            switch (key) {
                case "London":
                    color = tabColors.Red;
                    break;
                case "Paris":
                    color = tabColors.Blue;
                    break;
                case "Tokyo":
                    color = tabColors.Green;
                    break;
                case "Oslo":
                    color = tabColors.Orange;
                    break;
            }

            setActiveColor(color)
        }
        handleTabColor(activeTab)
    }, [activeTab])

    const handleActiveTab = (key) => {
        setActiveTab(key)
    }

    const handleTabContent = (key) => {
        return tabContent[key]
    }

    return (

        <div className="flex flex-col justify-start items-center h-full w-full mt-10">

            <div
                style={{ backgroundColor: activeColor }}
                className={`flex flex-col justify-center items-center w-[80%] h-[400px] p-6 text-white min-h-[100px]`}>
                <h1 className="text-4xl font-semibold pb-4">{activeTab}</h1>
                <p className="text-2xl">{handleTabContent(activeTab)}</p>
            </div>

            <div className="w-[80%] flex justify-start items-center bg-greyLight">

                {Object.keys(tabContent).map((key, index) => (
                    <button
                        key={index}
                        onClick={() => handleActiveTab(key)}
                        style={{ backgroundColor: activeTab === key ? activeColor : '' }}
                        className={` hover:bg-[#e6e6e6] transition-all duration-300 ease-out text-grey text-lg text-center p-5 w-full text ${activeTab === key ? 'text-white' : ''}`}>
                        {key}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default TabHeaders
