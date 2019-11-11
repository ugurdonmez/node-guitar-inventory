import express from "express"
import path from "path"
import dotenv from "dotenv"

import * as sessionAuth from './middleware/sessionAuth'
import * as routes from "./routes"

dotenv.config()

const port = process.env.SERVER_PORT
const app = express()

app.use(express.json())

// const port = 8080

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join( __dirname, "public")))

sessionAuth.register(app)
routes.register(app)

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` )
})