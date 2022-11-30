import InputText from "../components/InputText/InputText"
import io from 'socket.io-client'
import styled from '@emotion/styled'
import debug from "../utils/debug";
import { useEffect, useState } from "react"
import Chat from "../components/Chat/Chat";

const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    display: flex
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    margin: 10px;
    @media (max-width: 600px) {
    width: 90vw;
  }
  }
`

const user = "User_" + String(new Date().getTime());

let socket = io(process.env.HOST, {
  path: '/api/socketio',
})

const Home = () => {
  const [connected, setConnected] = useState(socket.connected);
  const [chat, setChat] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(0) 

  useEffect(() => {

    socket.on('connect', () => {
      debug(`g/socket connected! ${socket.id}`)
      setConnected(true)
    })
     
    socket.on('disconnect', () => {
      debug(`r/socket disconnect ${socket.id}`)
      setConnected(true)
    })

    socket.on("message", (message) => {
      chat.push(message);
      setChat([...chat]);
    });

    socket.on('online', (usersOnline) => {
      setOnlineUsers(usersOnline)
    })

    if (socket) return () => socket.disconnect();
  }, [])

  return (
    <ContainerHome>
      <p>Online users: {onlineUsers}</p>
      <Chat chat={chat} user={user}/>
      <InputText user={user} connected={connected}/>
    </ContainerHome>
   )
}

export default Home
