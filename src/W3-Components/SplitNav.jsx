const SplitNav = () => {
    return (
        <nav className="flex justify-start items-center h-[60px] w-[95%] bg-greyDark mt-10">
            <div className="flex justify-start items-center h-full w-full">
                <span className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#home" className="text-2xl">Home</a></span>
                <span className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#news" className="text-2xl">News</a></span>
                <span className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#contact" className="text-2xl">Contact</a></span>
            </div>
            <span className="flex justify-center items-center h-full px-4 bg-green hover:bg-greyLight hover:text-black text-white transition-all duration-300 ease-out"><a href="#home" className=" text-2xl">Help</a></span>
        </nav>
    )
}

export default SplitNav
