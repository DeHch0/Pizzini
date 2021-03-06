import React, {useState} from 'react';
import Requester from '../../Requester';
import '../Login/style.css';

const RegisterForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event) => {
        event.preventDefault()
        const data = {
            username,
            email,
            password,
        }
        Requester('user/register', 'POST' , data)
        .then(data => data.json())
        .then(data => {
            if(data.success) {
                setSuccess(data.success);
                setError('');
            } else if (data.error) {
                setError(data.error);
                setSuccess('');
            }   
        })
        .catch(err => console.log('err' + err))
    }

    const handleOnChange = ({ target }) => {
        switch(target.id) {
            case 'username': {setUsername(target.value); break ;}
            case 'password': {setPassword(target.value); break ;}
            case 're-password': {setRePassword(target.value); break ;}
            case 'email': {setEmail(target.value); break ;}
            default: {return ('');}
        }
    }

    return (
        <main>
        <div class="wrapper">
    {success ? <div>{success}</div> : null}
    {error ? <div>{error}</div> : null}

            <div class="login-form">

                <h2>Register</h2>
                <form onSubmit={handleLogin}>

                    <div class="input">
                        <label for="username"></label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username..."
                            value={username}
                            onChange={handleOnChange} />
                    </div>

                    <div class="input">
                        <label for="email"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email..."
                            onChange={handleOnChange}
                            value={email}
                        />
                    </div>

                    <div class="input">
                        <label for="password"></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password..."
                            onChange={handleOnChange}
                            value={password}
                        />
                    </div>

                    <div class="input">
                        <label for="re-password"></label>
                        <input
                            type="re-password"
                            name="re-password"
                            id="re-password"
                            placeholder="Retype Password..."
                            onChange={handleOnChange}
                            value={rePassword}
                        />
                    </div>

                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>

    </main>
    )

}

export default RegisterForm;