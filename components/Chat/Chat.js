import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

const ContainerChat = styled.div`
  width: 400px;
  height: 60vh;
  font-size: 17px;
  overflow: scroll;
  @media (max-width: 600px) {
    height: 500px;
    width: 90vw;
  }

`

const Chat = ({chat, user}) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return(
    <ContainerChat>
      {chat.length ? (
        chat.map((c, i) => (
          <div key={"msg_" + i}>
            <span>
              {c.user === user ? "[Me]: " : "[User]: "}
            </span>
              {c.text}
          </div>
        ))
      ) : (
        <div>
          No chat messages
        </div>
      )}
      <div ref={divRef} />
    </ContainerChat>
  )
}

export default Chat
