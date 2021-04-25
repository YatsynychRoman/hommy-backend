const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let rooms = []

io.on('connection', (socket) => {
  const { name, id, role } = socket.handshake.query

  if (role === 'admin') {
    rooms = rooms.filter((item) => item.id !== id)
  } else {
    rooms.push({ id, name })
    io.in(`helpersRoom`).emit('helpRequest', `${name} requested for help! ID: ${id}`)
  }

  socket.join(`${id}`, () => {
    if (id === 'helpersRoom') {
      rooms.map((item) => io.in('helpersRoom').emit('helpRequest', `${item.name} requested for help! ID: ${item.id}`))
    }

    io.in(`${id}`).emit('message', `${name} connected!`)
    socket.on('message', (msg) => {
      io.in(`${id}`).emit('message', `${name}: ${msg}`)
    })
  })

  socket.on('disconnect', (socket) => {
    rooms = rooms.filter((item) => item.id !== id)
    io.in(`${id}`).emit('message', `${name} disconnected`)
  })
})

module.exports = () => {
  server.listen(3002, () => {
    console.log('3002')
  })
}
