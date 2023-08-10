const mongoose = require('mongoose')
const url = "mongodb://rises0007:13579Raj*@ac-5o1sp4q-shard-00-00.3aesbdp.mongodb.net:27017,ac-5o1sp4q-shard-00-01.3aesbdp.mongodb.net:27017,ac-5o1sp4q-shard-00-02.3aesbdp.mongodb.net:27017/college-quora?ssl=true&replicaSet=atlas-148bmc-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () =>{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected succesfully");
    }).catch((error) => console.log("Error: ", error));
};
