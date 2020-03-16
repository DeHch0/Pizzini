const models = require('../models');
const jwt = require('../helpers/jwt');

const register = (req, res) => {

    let { username, email, password } = req.body;

    console.log(req.body);

    return models.User.create({ username, email, password, balance: 0 }).then(() => {
        console.log('REGISTERED SUCCESSFULLY ! ****');
        res.end();
        return
    }).catch(err => {
        // let field = Object.keys(err.keyValue)[0];
        if (err.name === 'MongoError' && err.code === 11000) {
            console.log(`${field} is taken !`);
            res
            .send({error:`${field} is taken !`})
            .end();
            return
        }

        console.log(err);
        return
    });
}

const login = (req, res) => {
    const {username, password} = req.body;

    console.log(username);

    models.User.findOne({ username })
    .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
    .then(([user, match]) => {
      if (!match) {
        res
        .status(401).send('Invalid username or password');
        return;
      }
                const token = jwt.createToken({ id: user._id });

                res
                    .send(
                        {
                            'success': 'Logged in successffully !',
                            'auth_cookie': token,
                            'username': user.username
                        })
                    .end();
      
    }).catch(err => {
        res.send(err).end();
    })

}

module.exports = {
    login,
    register
}