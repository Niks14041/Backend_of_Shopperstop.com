const mongoose = require("mongoose");

module.exports = () => {

    return mongoose.connect("mongodb+srv://neetu_gond:neetu_gond@cluster0.hyjbp.mongodb.net/DemoDB?retryWrites=true&w=majority");

}
//127.0.0.1
// to get logs file for heroku command is : heroku logs --tail