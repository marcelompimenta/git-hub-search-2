import Profile from "./ProfileComponent/ProfileComponent"
import Button from "./ButtonComponent/Button"
import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'
function App() {

  const [request, setRequest] = useState([])

  const url = 'https://api.github.com/users/marcelompimenta'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRequest(response.data)
      })
    console.log("fui executado")
  }, [])

  function test() {
    console.clear()
    console.log(request)
  }

  return (
    <>
      <h1>Survey GitHub User</h1>
      <Profile data={request} />
      <Button
        clName={"profile-button"}
        func={test}
        description={"Teste 1"}
        param
      />

    </>
  )
}

export default App