import { useState } from "react"
import { tabContent } from "./tabData"

const VerticalTabs = () => {

    const [activeTab, setActiveTab] = useState("London")

    const handleActiveTab = (key) => {
        setActiveTab(key)
    }

    const handleTabContent = (key) => {
        return tabContent[key]
    }

    return (
        <div className="flex justify-center items-start h-full w-full mt-10">
            <div className="w-[200px] flex flex-col justify-start items-center bg-greyLight">
                {Object.keys(tabContent).map((key, index) => (
                    <button
                        key={index}
                        onClick={() => handleActiveTab(key)}
                        className={` hover:bg-grey hover:text-white transition-all duration-300 ease-out text-grey text-lg text-center p-5 w-full text ${activeTab === key ? 'bg-grey text-white' : ''}`}>
                        {key}
                    </button>
                ))}
            </div>
            <div className="w-[500px] h-[272px] p-6 border-[1px] border-greyLight min-h-[100px]">
                <h1 className="text-2xl font-semibold pb-4">{activeTab}</h1>
                <p>{handleTabContent(activeTab)}</p>
            </div>
        </div>
    )
}

export default VerticalTabs
