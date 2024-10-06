import { useState } from "react"
import { tabContent } from "./tabData"

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("London")

    const handleActiveTab = (key) => {
        setActiveTab(key)
    }

    const handleTabContent = (key) => {
        return tabContent[key]
    }

    return (
        <div className="flex flex-col justify-start items-center h-full w-full mt-10">
            <div className="w-[80%] flex justify-start items-center bg-greyLight">

                {Object.keys(tabContent).map((key, index) => (
                    <button
                        key={index}
                        onClick={() => handleActiveTab(key)}
                        className={` hover:bg-grey hover:text-white transition-all duration-300 ease-out text-grey text-lg text-center p-5 min-w-[100px] text ${activeTab === key ? 'bg-grey text-white' : ''}`}>
                        {key}
                    </button>
                ))}

            </div>
            <div className="w-[80%] p-6 border-[1px] border-greyLight min-h-[100px]">
                <h1 className="text-2xl font-semibold pb-4">{activeTab}</h1>
                <p>{handleTabContent(activeTab)}</p>
            </div>
        </div>
    )
}

export default Tabs
