import React, { useState } from 'react';
import { login } from '../util/coetus-service';
import { withRouter } from 'react-router-dom'


const Login = ({setUser,history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let mess = 'Wrong username or password.'

    function handleSubmit(){
        login({email,password})
        .then(data =>  {
            if(data.success) {
                setUser(data.user)
                history.push('/memory-game')
            }
                setMessage(mess);
        })
    }

    return (
        <form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="Password" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="submit" value="Login" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
           <p className='par'>{message}</p> 
        </form>
    )
}

export default withRouter(Login)




