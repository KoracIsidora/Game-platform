import React, { useState, useEffect } from 'react';
import { register } from '../util/coetus-service';

const Register = ({ setUser, history }) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm, setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)
    const [message, setMessage] = useState('');
    let mess = 'Passwords must be the same.'

    useEffect(() => {
        function isValidPw() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setValidPw(true)
            }
            else {
                setValidPw(false)
            }
        }
        console.log(password)
        isValidPw()
    }, [password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        console.log(pwConfirm === password)
    }, [pwConfirm, password])

    function handleSubmit() {
        if (!validPw || !isSame)
            return
        register({ name, surname, username, email, password })
            .then(data => {
                console.log(data);
                if (data.success) {
                    setUser(data.user)
                    history.push('/memory-game')
                }
                console.log('Not registered.')
            })
    }

    function checkSame(){
        if(password !== pwConfirm){
            setMessage(mess);
        }
    }

    return (
        <form>
            <h1>Register</h1>
            <input type="text" placeholder="Name" required onInput={e => {
                setName(e.target.value)
            }} />
            <input type="text" placeholder="Surname" required onInput={e => {
                setSurname(e.target.value)
            }} />

            <input type="text" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }} />
            <input type="email" placeholder="Email" required onInput={e => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder="Password" required onInput={e => {
                setPassword(e.target.value)
            }} />
            <input type="password" placeholder="Confirm password" required onInput={e => {
                setPwConfirm(e.target.value)
            }} />


            <input type="submit" value="Register" onClick={e => { e.preventDefault(); handleSubmit(); checkSame() }} />
            <p>*Password must have 8 letters and a number.</p>
            <p>{message}</p>
        </form>
    )
}

export default Register