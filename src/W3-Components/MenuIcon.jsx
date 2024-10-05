import { useState } from "react"

const MenuIcon = () => {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div className="flex flex-col justify-start items-center h-full w-full">
            <div className="flex justify-center items-center w-full mt-10">
                <button onClick={handleToggle}>
                    <div className={`w-[60px] h-[10px] bg-grey my-[10px] ${open ? 'rotate-45 translate-y-[20px]' : ''} transition-all duration-500 ease-out rounded-lg`}></div>
                    <div className={`w-[60px] h-[10px] bg-grey my-[10px] ${open ? 'opacity-0' : ''} transition-all duration-500 ease-out rounded-lg`}></div>
                    <div className={`w-[60px] h-[10px] bg-grey my-[10px] ${open ? '-rotate-45 translate-y-[-20px]' : ''} transition-all duration-500 ease-out rounded-lg`}></div>
                </button>
            </div>
        </div>
    )
}

export default MenuIcon
