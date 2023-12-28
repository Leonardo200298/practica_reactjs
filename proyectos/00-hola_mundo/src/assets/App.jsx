import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const formatUserName = (nombreDeUsuario) => `@${nombreDeUsuario}`
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollow username='unknown' name='desconocido'/>
            <TwitterFollowCard formatUserName={formatUserName} isFollow username='ivan123456-ivan' name='Ivan'/>
            <TwitterFollowCard formatUserName={formatUserName} isFollow={false} username='Leonardo200298' name='leonardo'/>

        
        </section>
    )
}