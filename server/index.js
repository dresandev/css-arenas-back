import express from "express"
import { Server } from "socket.io"
import { createServer } from "node:http"

const app = express()
const port = process.env.port ?? 3000

const server = createServer(app)
const io = new Server(server)

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html")
})

io.on("connection", () => {
  console.log("New connection");
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
