const Requester = (route = 'products', method = 'GET', data = '') => {
    let request =  fetch(`http://localhost:3000/${route}` , {
    method,
    credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
              },
              body: data ? JSON.stringify(data) : null
    });
    
    return request
}

export default Requester;