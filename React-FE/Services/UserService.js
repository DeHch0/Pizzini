import cookie from 'react-cookies';

const login = (data) => {
  return fetch(`http://localhost:3000/user/login`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Accept': '*',
      credentials: 'include',
      'Content-Type' : 'application/json'
    }})
  .then(res => res.status === 200 ? res.json() : Promise.reject(res))
  // .then(res => res.json())
  // .then(res => {
  //   cookie.save('username' , res.username);
  //   cookie.save('auth_cookie' , res.auth_cookie);
  // })
}

// const login = (data) => {
//   return fetch(`http://localhost:3000/user/login`, {
//     body: JSON.stringify(data),
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       credentials: 'include'
//     },
//   }).then(res => res.text()
//   .then(text => res.status === 200 ? text : Promise.reject(text)));
// }


const checkAdmin = () => {

  let username = cookie.load('username');
  return fetch(`http://localhost:3000/user/${username}`)
  .then(res => res.json())
}


export {
    login,
    checkAdmin
};