import components from '../W3-Components'
import { useState } from 'react'

const MainSidebar = ({ handleDisplayComponent }) => {

    const [focus, setFocus] = useState("")

    const handleFocus = (key) => {
        setFocus(key)

    }

    return (
        <nav className='fixed top-0 left-0 w-[220px] h-[100vh] bg-greyLight border-r-4 border-green'>
            <h1 className='text-xl text-center text-white bg-green font-semibold p-2'>Components</h1>
            {Object.entries(components).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        style={{
                            backgroundColor: focus === key ? "#545455" : "",
                            color: focus === key ? "white" : ""
                        }}
                        onClick={() => {
                            handleDisplayComponent(key, value);
                            handleFocus(key);
                        }}
                        className="bg-white text-green w-full p-2 text-lg border-b-[1px] border-greyLight hover:bg-grey hover:text-white transition-all duration-300 ease-out">
                        {key}
                    </button>
                )
            })}
        </nav>
    )
}

export default MainSidebar
