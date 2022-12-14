import styled from "styled-components";
import { useState } from 'react'

const Input = styled.input`
  background-color: #00000a;
  color: #f5f6f7;
  border: 0;
  outline: 0px;
  height: 40px;
  width: 400px;
  font-size: 17px;
  padding-left: 10px;
  @media (max-width: 600px) {
    width: 90vw;
  }
`
const Label = styled.label`
  font-size: 17px;
`

const InputText = ({user, connected}) => {
    const [text, setText] = useState("")
    

    const handleChange = (e) => {
      setText(e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (text) {
        const message = {
          user,
          text
        };

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        });

        if (response.ok) setText("");
      }
    };

  return(
    <form autoComplete='off' noValidate onSubmit={handleSubmit}>
      <Label htmlFor='inputChat'>~ $</Label>
      <Input 
        id='inputChat' 
        onChange={handleChange} 
        type='text'
        placeholder={connected ? 'Write...' : 'Connecting...'}
        value={text}
        disabled={!connected}
        />
    </form>
  )
}

export default InputText
