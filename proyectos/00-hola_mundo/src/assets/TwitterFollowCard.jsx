export function TwitterFollowCard({formatUserName, username, name, isFollow}){
    console.log(isFollow);
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar' 
                alt="el avatar de un desconocido"
                src={`https://unavatar.io/${username}`}
                />
                
            
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(username)}</span>
            </div>
        </header>
        <aside>
            <button className='tw-followCard-button'>seguir</button>
        </aside>
    </article>
    )
}