import './Modal.css'

function Modal() {
    return (
        <div className='container_modal'>
            <div>
                <h3>Nome Completo do Repositorio</h3>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam est cum ab incidunt? Quasi, omnis officiis culpa delectus ducimus eveniet?</p>
            </div>
            <div>
                <div>
                    <span>JavaScript 70%</span>
                    <span>HTML 10%</span>
                    <span>CSS 20%</span>
                </div>
            </div>
            <div className="container_link_url">
                <div className="container_link">
                    <input type="text" name="url_clone" id="url_clone" value="git clone https://api.github.com" readOnly />
                    <i>CLONAR</i>
                </div>
            </div>
            <div>
                <a href="#">Link do repositorio</a>
            </div>
        </div>
    )
}

export default Modal