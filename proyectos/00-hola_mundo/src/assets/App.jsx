import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [

    {
        username:'unknown',
        name:'desconocido',
        isFollowing:true
    },
    {
        username:'ivan123456-ivan',
        name:'ivanceto',
        isFollowing:true
    },
    {
        username:'Leonardo200298',
        name:'leonardo',
        isFollowing:false
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map((usuarios)=>{
                    return (
                        <TwitterFollowCard
                            key={usuarios.username} 
                            username={usuarios.username}
                            name={usuarios.name}
                            isFollowingInitialState={usuarios.isFollowing}
                        />

                    )
                })
            }

        
        </section>
    )
}