import styled from "styled-components";

interface IClient {
    image: string
}
const Client = ({image}) => <SClient image={image}/>

const SClient = styled.li<IClient>`
  width: 360px;
  height: 95px;
  margin: 15px;
  
  background: url(${({image})=> image}) no-repeat center;
  background-size: 100% 100%;
`

export default Client