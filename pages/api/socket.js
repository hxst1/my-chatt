import debug from "../../utils/debug";
import { Server } from "socket.io";

const SocketHandler = async (req, res) => {
  try {
      if (res.socket.server.io) {
        debug('g/Socket is already running')
      } else {
        debug('g/Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io
      }
      res.end()
  } catch (error) {
    debug('r/', error)
  }
}

export default SocketHandler
