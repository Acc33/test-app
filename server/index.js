const express = require('express');
const {Server} = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/authRouters");
const session = require("express-session");
const patientDetailRouter = require("./routers/patientDetailRouter");
const resetRouters = require("./routers/resetRouters");
const getPatientsRouter = require("./routers/getPatientsRouters");
require("dotenv").config()
const path = require("path");
const PORT =4000;

const server = require("http").createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: "true",
    },
});

app.use(helmet());
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

app.use(
    session({
        secret:process.env.COOKIE_SECRET,
        credentials: true,
        name: "sid",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
            httpOnly: true,
            sameSite: process.env.ENVIRONMENT === "production" ? "None" : "lax",
        }
    })
);

app.use("/auth", authRouter);
app.use("/getPatients",getPatientsRouter);
app.use("/patientDetails",patientDetailRouter);
app.use("/reset",resetRouters);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"client/build")));
}

console.log(__dirname);

io.on("connect", socket => {});


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});





