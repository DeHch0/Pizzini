const errorHandler = (err) => {
    let status = 200;
    let message = '';
    if (err.code == '11000')  {
        let errorField = Object.keys(err.keyPattern)[0];
        let errorValue = err.keyValue[errorField];
        message =  errorValue + ' already exists !';
    } else if (err.name == 'Validation Error' && err.kind == 'required') {
        message = err.path + ' field cannot be empty !';
    } else if (err.errors) {
        console.log('many errors !');
    } else {
        message = 'Server error !'
        status = 500;
    }
    return {
        status,
        message
    }
}

module.exports = {errorHandler}