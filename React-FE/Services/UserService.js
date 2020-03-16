import cookie from 'react-cookies'

// const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

// const [usernameCookie , setUsernameCookie , removeUsernameCookie] = useCookies(['username'])

const login = (data) => {
  return fetch(`http://localhost:3000/user/login`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    }})
  .then(res => res.status === 200 ? res.json() : Promise.reject(res))
  .then(res => {
    cookie.save('username' , res.username);
    cookie.save('auth_cookie' , res.auth_cookie
    );
    console.log(res.username);
  })
}


// const logout = () => {

//   return fetch(`http://localhost:3000/user/logout`, {
//     method: 'POST',
//     credentials: 'include'
//   })
//     .then(res => res.text());
// }

// const checkAdmin = () => {

//   let username = Cookie.get('username');
//   return fetch(`http://localhost:3000/user/${username}`)
//   .then(res => res.json())
// }


export {
    login,
};