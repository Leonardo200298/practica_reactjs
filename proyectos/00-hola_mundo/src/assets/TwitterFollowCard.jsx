import { useState } from "react";

export function TwitterFollowCard({ username, name, isFollowingInitialState}){
    const [isFollowing, setIsFollowing] = useState(isFollowingInitialState);

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

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
                <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
        </header>
        <aside>
            <button 
                /* parte de los estilos del boton
                    con renderizado condicional
                */
                className={isFollowing ? 
                'tw-followCard-button is-following' : 
                'tw-followCard-button' 
                }
                /* funcion de cambio de estado con hook */
                onClick={handleClick}
            >
                    
                    <span className="tw-followCard-text">{isFollowing ? 'siguiendo' : 'seguir'}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}