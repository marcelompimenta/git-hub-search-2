import Profile from "./ProfileComponent/ProfileComponent"
import Button from "./ButtonComponent/Button"
import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'
import IdGenerate from "./Hooks/IdGenerate"
import Repositories from "./RepositoriesComponent/RepositoriesComponent"
import Modal from "./ModalComponent/Modal"

function App() {

  const [request, setRequest] = useState([])
  const [repos, setRepos] = useState([])

  const url = 'https://api.github.com/users/marcelompimenta'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRequest(response.data)
      })
  }, []);

  useEffect(() => {
    axios.get(request.repos_url)
      .then(response => {
        localStorage.setItem('repositories', JSON.stringify(response.data))
      })
  }, [request])

  function showRepositories() {
    const repositories = JSON.parse(localStorage.getItem('repositories'))
    setRepos(repositories)
  }

  return (
    <>
      <h1>Survey GitHub User</h1>
      <Profile data={request} />
      <Button
        clName={"profile-button"}
        func={showRepositories}
        description={"Teste 1"}
        param

      />
      {
        repos.map(repo => (<>
          <Repositories dataRepos={repo} key={IdGenerate()} />
          <Modal />
        </>
        ))
      }
    </>
  )
}

export default App