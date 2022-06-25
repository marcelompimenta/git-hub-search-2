function Button({ func, description, param }) {
    return (
        <div>
            <button
                onClick={() => { func(param) }}
                type="button">{description}</button>
        </div>
    )
}
export default Button