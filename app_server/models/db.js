const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://dbUser:admin@cluster0.ym8et.mongodb.net/AssignmentDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    dbName: 'mymusicDB'
});

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`mongoose disconnected through ${msg}`);
        callback();
    });
};
//for nodmon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodmon restart', () => {
        process.kill(process.pid, 'SIGNUSR2');
    });
});

//for app termination

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});


//for heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./music');
