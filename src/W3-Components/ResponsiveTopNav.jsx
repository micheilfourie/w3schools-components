import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const ResponsiveTopNav = () => {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <nav className={`flex flex-col justify-start items-center w-[95%] ${open ? 'bg-green' : 'bg-greyDark'}  mt-10`}>
            <ul className="flex justify-between items-center w-full h-[60px]">
                <li className="flex justify-center items-center h-full px-4 bg-green transition-all duration-300 ease-out"><a href="#home" className="text-white text-2xl">Home</a></li>
                <button onClick={handleToggle} className="hover:bg-greyLight hover:text-black text-white h-full">
                    <FontAwesomeIcon icon={faBars} className=" text-4xl px-4 " />
                </button>
            </ul>

            {open ? (
                <ul className="w-full bg-greyDark">
                    <li className="flex justify-start items-center h-full w-full p-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#news" className="text-2xl">News</a></li>
                    <li className="flex justify-start items-center h-full w-full p-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#contact" className="text-2xl">Contact</a></li>
                    <li className="flex justify-start items-center h-full w-full p-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#about" className="text-2xl">About</a></li>
                </ul>
            ) : (
                null
            )}


        </nav>
    )
}

export default ResponsiveTopNav
