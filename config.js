const mongoose = require('mongoose');

async function connect() {
    // const url = 'mongodb://cluster0.txsjl.mongodb.net:27017';
    // const url = 'mongodb://localhost/workshop';

    const url = process.env.DB_URL;
    try {
        const connection = await mongoose.connect(url
            , { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("connected to db.....")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connect;