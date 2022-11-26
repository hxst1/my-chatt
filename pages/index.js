import InputText from "../components/InputText/InputText"
import io from 'socket.io-client'
import styled from '@emotion/styled'
import debug from "../utils/debug";
import { useEffect, useState } from "react"
import Chat from "../components/Chat/Chat";

const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const user = "User_" + String(new Date().getTime());

const Home = () => {
  let socket = io()

  const [connected, setConnected] = useState(socket.connected);
  const [chat, setChat] = useState([]);  

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

    if (socket) return () => socket.disconnect();
  }, [])

  return (
    <ContainerHome>
      <Chat chat={chat} user={user}/>
      <InputText user={user} connected={connected}/>
    </ContainerHome>
   )
}

export default Home
