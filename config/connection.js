const { connect, connection} = require('mongoose');

connect('mongodb://localhost/socialBackEnddb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;