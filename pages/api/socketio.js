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
  }
  res.end()
}

export default socketio
