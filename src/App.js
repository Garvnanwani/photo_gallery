import React, { useEffect, useState } from "react"
import "./assests/css/style.css"
import Images from "./components/Images"

function App() {
  const [title] = useState("Welcome To React")
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    console.log("App mounted")
  }, [])

  return (
    <>
      <div className="mx-auto w-full text-center my-4">
        <div>{title}</div>
        <button onClick={() => setIsShowing(!isShowing)}>Toggle Image</button>
        {isShowing ? <Images /> : null}
      </div>
    </>
  )
}

export default App
