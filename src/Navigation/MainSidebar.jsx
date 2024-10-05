import React from 'react'
import components from '../W3-Components'

const MainSidebar = ({ handleDisplayComponent }) => {
    console.log(components);

    return (
        <nav className='fixed top-0 left-0 w-[220px] h-[100vh] bg-[#d4d4d6] border-r-4 border-[#05AA6C]'>
            <h1 className='text-xl text-center text-white bg-[#05AA6C] font-semibold p-2'>Menu</h1>
            {Object.entries(components).map(([key, value]) => {
                return (
                    <button
                        onClick={() => handleDisplayComponent(value)}
                        className="bg-white text-[#05AA6C] w-full p-2 text-lg hover:bg-[#3f3f3f] transition-all duration-300 ease-out" key={key}>
                        {key}
                    </button>
                )
            })}
        </nav>
    )
}

export default MainSidebar
