import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Accordian = () => {

    const [itemStates, setItemStates] = useState({ 1: false, 2: false, 3: false })

    const handleToggle = (key) => {
        setItemStates({ ...itemStates, [key]: !itemStates[key] });
    }

    return (
        <div className="flex flex-col justify-start items-center w-full h-full mt-10">

            <div className="w-[80%]">
                <button
                    onClick={() => handleToggle(1)}
                    className="bg-greyLight hover:bg-grey hover:text-white transition-all duration-300 ease-out text-grey w-full text-lg text-start p-5">
                    <div className="flex justify-between items-center">
                        <p>Section 1</p>
                        {itemStates[1] ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                    </div>

                </button >
                <div className={`${itemStates[1] ? 'block' : 'hidden'} p-4 border-[1px]`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic, neque nam quaerat ex eum nostrum, laborum incidunt vitae optio sed! Vero dicta rerum perspiciatis quos esse quidem dolorem minima.
                    </p>
                </div>
            </div>
            <div className="w-[80%]">
                <button
                    onClick={() => handleToggle(2)}
                    className="bg-greyLight hover:bg-grey hover:text-white transition-all duration-300 ease-out text-grey w-full text-lg text-start p-5">
                    <div className="flex justify-between items-center">
                        <p>Section 2</p>
                        {itemStates[2] ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                    </div>

                </button >
                <div className={`${itemStates[2] ? 'block' : 'hidden'} p-4 border-[1px]`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic, neque nam quaerat ex eum nostrum, laborum incidunt vitae optio sed! Vero dicta rerum perspiciatis quos esse quidem dolorem minima.
                    </p>
                </div>
            </div>
            <div className="w-[80%]">
                <button
                    onClick={() => handleToggle(3)}
                    className="bg-greyLight hover:bg-grey hover:text-white transition-all duration-300 ease-out text-grey w-full text-lg text-start p-5">
                    <div className="flex justify-between items-center">
                        <p>Section 3</p>
                        {itemStates[3] ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                    </div>

                </button >
                <div className={`${itemStates[3] ? 'block' : 'hidden'} p-4 border-[1px]`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic, neque nam quaerat ex eum nostrum, laborum incidunt vitae optio sed! Vero dicta rerum perspiciatis quos esse quidem dolorem minima.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Accordian
