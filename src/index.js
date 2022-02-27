const express = require("express");
const app = express();
const connect = require("./configs/db");
const women_collection_controller = require("./controller/women_collection_controller");
const cors = require("cors");

const port = process.env.PORT || 7005;
app.use(cors())
app.use(express.json());
app.use("/products", women_collection_controller);
const start = async () => {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        })
    } catch (err) {
        console.log({ Error: err.message })
    }
}
start()