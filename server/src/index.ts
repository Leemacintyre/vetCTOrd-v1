import express, { Express, Request, Response } from "express"
import cors from "cors"

import api from "./routes"

const app: Express = express()
const port = 5001

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5001"],
        credentials: true,
    })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", api)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
