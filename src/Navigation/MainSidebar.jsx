import React from 'react'
import components from '../W3-Components'

const MainSidebar = ({ handleDisplayComponent }) => {

    return (
        <nav className='fixed top-0 left-0 w-[220px] h-[100vh] bg-greyLight border-r-4 border-green'>
            <h1 className='text-xl text-center text-white bg-green font-semibold p-2'>Components</h1>
            {Object.entries(components).map(([key, value]) => {
                return (
                    <button
                        onClick={() => handleDisplayComponent(key, value)}
                        className="bg-white text-green w-full p-2 text-lg border-b-[1px] border-greyLight hover:bg-grey hover:text-white transition-all duration-300 ease-out" key={key}>
                        {key}
                    </button>
                )
            })}
        </nav>
    )
}

export default MainSidebar
