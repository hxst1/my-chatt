import styled from '@emotion/styled'

const ContainerChat = styled.div`
  width: 400px;
  height: 60vh;
  font-size: 17px;
`

const Chat = ({chat, user}) => {
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
    </ContainerChat>
  )
}

export default Chat
