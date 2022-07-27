import Profile from "./ProfileComponent/ProfileComponent"
import Button from "./ButtonComponent/Button"
import axios from "axios"
import React, { useEffect, useState } from "react"
import './App.css'
import IdGenerate from "./Hooks/IdGenerate"
import Repositories from "./RepositoriesComponent/RepositoriesComponent"
import Modal from "./ModalComponent/Modal"
import getIndexObject from "./Hooks/getIndexObject" // não está em uso

function App() {

  const [request, setRequest] = useState([])
  const [repos, setRepos] = useState([])
  const [isVisible, setIsVisible] = useState(false)


  const url = 'https://api.github.com/users/marcelompimenta'
  // passar o usuario chapado, por enquanto!

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

  function modifyVisibillity() {
    if (!isVisible) setIsVisible(true); // funcão que seta o estado do modal
  }

  return (
    <>
      <h1>Survey GitHub User</h1>
      <Profile
        key={IdGenerate()}
        data={request} />
      <Button
        key={IdGenerate()}
        clName={"profile-button"}
        func={showRepositories}
        description={"Ver repositorios"}
        param

      />
      {
        React.Children.toArray(
          repos.map((repo, index) => (
            <>
              <Repositories
                dataRepos={repo}
                ind={index}
              />

              {isVisible ? <Modal repository={repo} /> : false}
            </>
          )))
      }
    </>
  )
}

export default App