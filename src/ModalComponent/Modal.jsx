import './Modal.css'

function Modal({ repository }) {
    console.log(repository)
    const { full_name, description, language, git_url, html_url } = repository

    return (
        <div className='container_modal'>
            <div>
                <h3>{full_name}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <div>
                    <span>{language}</span>
                </div>
            </div>
            <div className="container_link_url">
                <div className="container_link">
                    <input
                        type="text"
                        name="url_clone"
                        id="url_clone"
                        value={`git clone ${git_url}`}
                        readOnly />

                    <i>CLONAR</i>
                </div>
            </div>
            <div>
                <a href={html_url}>Link do repositorio</a>
            </div>
        </div>
    )
}

export default Modal