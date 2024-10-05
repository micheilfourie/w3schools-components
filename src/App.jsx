import IconBar from "./W3-Components/IconBar"
import MainSidebar from "./Navigation/MainSidebar"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const App = () => {

  const [displayComponent, setDisplayComponent] = useState(null)
  const [componentName, setComponentName] = useState("")

  const handleDisplayComponent = (name, component) => {
    setComponentName(name)
    setDisplayComponent(component)
  }

  return (
    <main className=" h-[100vh] ml-[220px]">

      {!displayComponent ? (
        <div className="flex justify-center items-center pt-10">
          <FontAwesomeIcon icon={faArrowLeft} className="text-4xl text-grey mr-10" />
          <h1 className="capitalize text-3xl text-grey font-bold">Select A Component From The menu</h1>
        </div>
      ) : (null)}

      <MainSidebar handleDisplayComponent={handleDisplayComponent} />

      <h1 className="text-5xl text-grey text-center font-semibold pt-20 ">{componentName}</h1>
      <div className="h-[80vh]">
        {displayComponent}
      </div>

    </main>
  )
}

export default App
