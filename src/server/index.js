/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
const {APP_PORT} = process.env;
const app = express();

// Import App Routers
const banksRouter = require("./routes/banks.js");
const terminalsRouter = require("./routes/terminals.js");

/*
 * Connection to database
 */
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${
    process.env.DB_NAME
}`; // URL to connect to database

mongoose.connect(url, {
    useNewUrlParser: true,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    authSource: "admin",
});
const db = mongoose.connection;
/* ------ */

/*
 * Middlewares stack
 */
// Cross-Origin middleware
app.use(cors());

// Requests middlewares
app.use(express.json());
app.use(express.urlencoded());

// Routing middlewares
app.use("/api/banks", banksRouter);
app.use("/api/terminals", terminalsRouter);
/* ------ */

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Successfully connected to server");

    /*
     * Routes
     */
    app.get("/hello", (req, res) => {
        console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
        res.send("Hello, World!");
    });

    /*
     * Initiate Express
     */
    app.listen(APP_PORT, () =>
        console.log(`🚀 Server is listening on port ${APP_PORT}.`),
    );
});
