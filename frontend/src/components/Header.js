import { useContext } from 'react'
import Context from './Context'

export default function Header() {
    const userData = useContext(Context)
    return (
        <nav className="nav">
        <img className="logo" src={require('../img/logo.png')} alt='logo'/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/addclub">Add Your Club</a></li>
            <li><a href="/signin">Sign-In</a></li>
            <li><a href="/signup">Sign-Up</a></li>
            <li className="hello">Hi! {userData.name}</li>
        </ul>
        </nav>
    )
}
