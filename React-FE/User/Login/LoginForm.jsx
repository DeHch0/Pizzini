import React, {useState} from 'react' ;
// import Requester from '../../Requester';

const LoginForm  = (login) => {

    console.log(login);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault()

        const data = {
            username,
            password
        }

        login.login(data);
    }

    const handleOnChange = ({ target }) => {
        switch(target.id) {
            case 'username': {setUsername(target.value); break ;}
            case 'password': {setPassword(target.value); break ;}
            default: {return ('');}
        }
    }

    return (
        <main>
        <div class="wrapper">


            <div class="login-form">

                <h2>Login</h2>
                <form onSubmit={handleLogin}>

                    <div class="username">
                        <label for="username"><img src="https://img.icons8.com/windows/96/000000/user.png" alt='Error dur img loading...' /></label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username..."
                            value={username}
                            onChange={handleOnChange} />
                    </div>

                    <div class="password">
                        <label for="password"><img src="https://img.icons8.com/material-rounded/96/000000/lock.png" alt='Error dur img loading...'/></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password..."
                            onChange={handleOnChange}
                            value={password}
                        />
                    </div>

                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>

    </main>



    )
}


export default LoginForm