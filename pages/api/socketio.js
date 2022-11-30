import debug from "../../utils/debug";
import { Server } from "socket.io";

const socketio = async (req, res) => {
  if (res.socket.server.io) {
    debug('g/Socket is already running')
  } else {
    debug('g/Socket is initializing')
    const io = new Server(res.socket.server, {
      path: '/api/socketio'
    })
    res.socket.server.io = io

    io.on('connection', (socket) => {
      let online = io.engine.clientsCount
      io.emit('online', online)
      socket.on('disconnect', () => {
        let online = io.engine.clientsCount
        io.emit('online', online)
      })
    });
  }
  res.end()
}

export default socketio
