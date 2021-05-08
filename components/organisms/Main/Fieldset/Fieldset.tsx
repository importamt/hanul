import styled from "styled-components";

interface IFieldset {
    name: string
    setName: Function
    phone: string
    setPhone: Function
    email: string
    setEmail: Function
    message: string
    setMessage: Function
}

export const Fieldset = ({
                             name,
                             setName,
                             phone,
                             setPhone,
                             email,
                             setEmail,
                             message,
                             setMessage,
                         }: IFieldset) => {

    return <SFieldset>
        <li>
            <label>Name</label><input value={name} onChange={event=>setName(event.target.value)}/>
        </li>
        <li>
            <label>H.P</label><input value={phone} onChange={event=>setPhone(event.target.value)}/>
        </li>
        <li>
            <label>E-mail</label><input value={email} onChange={event=>setEmail(event.target.value)}/>
        </li>
        <li>
            <label>Message</label><textarea value={message} onChange={event=>setMessage(event.target.value)}/>
        </li>
    </SFieldset>
}

const SFieldset = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-width: 300px;
  width: 40%;
  max-width: 768px;

  &:before {
    content: 'contact us';
    font-family: 'Noto Sans KR', sans-serif;
    color: black;
    font-size: 25px;
    font-weight: 400;
    margin: 30px 0;
  }

  & li {
    list-style-type: disc;
    display: flex;
    align-items: center;
    width: 100%;

    margin: 5px 0;
  }

  & li:before {
    content: '';
    width: 5px;
    height: 5px;
    display: block;
    border-radius: 100%;
    background: black;
    margin-right: 5px;
  }

  & > li > label {
    font-family: 'Noto Sans KR', sans-serif;
    color: black;
    font-size: 18px;
    font-weight: 400;
    flex: 15;
    min-width: 80px;
  }

  & input {
    flex: 85;
    height: 45px;
    border-radius: 10px;
    border: 1px solid black;
  }

  & textarea {
    height: 220px;
    flex: 85;
    border-radius: 10px;
    border: 1px solid black;
  }
`