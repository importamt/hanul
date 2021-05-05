import styled from "styled-components";

interface IClient {
    image: string
}
const Client = ({image}) => <SClient image={image}/>

const SClient = styled.li<IClient>`
  width: 420px;
  height: 115px;
  margin: 10px;
  
  background: url(${({image})=> image}) no-repeat;
  background-size: 100% 100%;
`

export default Client