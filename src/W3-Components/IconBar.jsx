import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney, faMagnifyingGlass, faEnvelope, faGlobe, faTrash } from "@fortawesome/free-solid-svg-icons"

const IconBar = () => {
    return (
        <div className=" flex flex-col justify-space-between items-center h-full">

            <h1 className="text-5xl text-[#545455] font-semibold pt-20 ">Icon Bars</h1>

            <div className="flex flex-col justify-evenly items-center h-full w-full">
                <nav className="grid grid-cols-5 w-[500px] h-[80px] text-3xl">
                    <button className="text-white bg-[#05AA6C] ">
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </nav>

                <nav className="grid grid-rows-5 h-[500px] w-[80px] text-3xl">
                    <button className="text-white bg-[#05AA6C] ">
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                    <button className="text-white bg-[#545455] hover:bg-[#2f2f30] transition-all duration-500 ease-out">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </nav>
            </div>



        </div>

    )
}

export default IconBar
