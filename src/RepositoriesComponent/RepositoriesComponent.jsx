import Button from "../ButtonComponent/Button"
import getIndexObject from "../Hooks/getIndexObject"
import IdGenerate from "../Hooks/IdGenerate"

function Repositories({ dataRepos }) {

    const { name, created_at, language } = dataRepos
    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <span>{created_at}</span>
            </div>
            <div>
                <span>{language}</span>
            </div>
            <div>
                <Button
                    key={IdGenerate()}
                    func={getIndexObject}
                    param={dataRepos}
                    description={"Ver detalhes"} />
            </div>
        </div>
    )
}

export default Repositories