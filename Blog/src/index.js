const http = require("http");
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbConnection");
const bodyParser = require("body-parser");
const routes = require("./routes/v1");
const cors = require("cors");
const path = require("path");

const app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** Get image */
// app.use(express.static(`./public`));
app.use(express.static(path.join(__dirname, `./public`)));

/** enable cors */
app.use(cors());
app.options("*", cors());

// creating route namespace
app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
});

// database connection
connectDB();

// create server using http
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server listning port number 8080!");
  });

