function home (req, res) {

    res.send('In home controller !');
    res.end();
}

module.exports = {
    home
}