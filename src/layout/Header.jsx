import  React  from "react"
import Logo from "../components/Logo"
import { Link,withRouter } from 'react-router-dom'

const Header = ({ logedIn, setUser,history,user }) => {

    if(logedIn){
        return(
            <header>

                <nav>
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                    <Link to={`/profile/${user.user_id}`}>{user.username}</Link>
                    <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Logout</button></Link>
                    <Link to='/memory-game'><button className='header-btn'>Memory game</button></Link>
                    </div>
                </nav>
                
            </header>
        )
    }
    else {
        return (
            <header className='header'>
                <nav>
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                    <Link to='/register'><button className='header-btn'>Register</button></Link>
                    <Link to='/login'><button className='header-btn'>Login</button></Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)
