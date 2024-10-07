const TopNavigation = () => {
    return (
        <nav className="flex justify-start items-center h-[60px] w-[95%] bg-greyDark mt-10">
            <ul className="flex justify-start items-center h-full w-full">
                <li className="flex justify-center items-center h-full px-4 bg-green transition-all duration-300 ease-out"><a href="#home" className="text-white text-2xl">Home</a></li>
                <li className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#news" className="text-2xl">News</a></li>
                <li className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#contact" className="text-2xl">Contact</a></li>
                <li className="flex justify-center items-center h-full px-4 hover:bg-greyLight hover:text-black text-white  transition-all duration-300 ease-out"><a href="#about" className="text-2xl">About</a></li>
            </ul>
        </nav>
    )
}

export default TopNavigation
