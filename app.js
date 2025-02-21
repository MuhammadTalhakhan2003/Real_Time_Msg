const http = require('http')
const express = require('express')
const path = require('path')
const {Server} = require('socket.io')

const app = express()
const server = http.createServer(app)
app.use(express.static(path.resolve('./public')))
const io = new Server(server)

io.on('connection' , (socket) =>{
  socket.on('user_message',(message)=>{
    io.emit('message',message)
  })
})

app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(9000, ()=>{
    console.log(`Server Started AT PORT 9000`)
})