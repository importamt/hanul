import styled from "styled-components";

export const Fieldset = () => {

    return <SFieldset>
        <li>
            <label>Name</label><input/>
        </li>
        <li>
            <label>H.P</label><input/>
        </li>
        <li>
            <label>E-mail</label><input/>
        </li>
        <li>
            <label>Message</label><textarea/>
        </li>
    </SFieldset>
}

const SFieldset = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  width: 768px;

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
  }
  
  & input {
    flex: 85;
    height: 30px;
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