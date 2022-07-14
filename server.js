"user strict";

// initialize environment parameter
require('dotenv').config();
const env = process.env;

// import modules
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// create instance
const app = express();
const server = http.Server(app);
const io = socketIO(server);

// set port no
const PORT = env.PORT || 3000;

app.use(express.static(__dirname + "/public"))

// start server at http://18.116.79.97:3000
server.listen(PORT, () => {console.log("Test running at http://localhost:%d", PORT)});