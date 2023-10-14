const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URI;



const connectDB = () => {

    return mongoose.connect(
        url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )

        .then(() => {
            console.log("connected to Sucess")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connectDB