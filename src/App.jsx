import Profile from "./ProfileComponent/ProfileComponent"
import Button from "./ButtonComponent/Button"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [request, setRequest] = useState([])

  const url = 'https://api.github.com/users/marcelompimenta'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRequest(response)
      })
    console.log("fui executado")
  }, [])

  function test() {
    console.clear()
    console.log(request.data)
  }

  return (
    <>
      <h1>Survey GitHub User</h1>
      <Profile />
      <Button
        func={test}
        description={"Teste 1"}
        param
      />

    </>
  )
}

export default App