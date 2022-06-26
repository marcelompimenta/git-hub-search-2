function Button({ clName, func, description, param }) {
    return (
        <div className={clName}>
            <button
                onClick={() => { func(param) }}
                type="button">{description}</button>
        </div>
    )
}
export default Button