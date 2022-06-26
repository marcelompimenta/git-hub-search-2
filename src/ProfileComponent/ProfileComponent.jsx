import './ProfileComponent.css'
function Profile({ data }) {
    const { avatar_url, name, html_url } = data
    return (
        <>
            <div className='container'>
                <div className='container-image'>
                    <img
                        src={avatar_url}
                        alt="fotinho" />
                </div>
                <div className='name'>
                    <span>{name}</span>
                </div>
                <div className='link-profile'>
                    <a target={'_blank'} href={html_url}>Link do Perfil</a>
                </div>
            </div>
        </>
    )
}

export default Profile