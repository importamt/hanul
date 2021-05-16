import styled from "styled-components";

interface IClient {
    image: string
}
const Client = ({image}) => <SClient image={image}/>

const SClient = styled.li<IClient>`
  width: 310px;
  height: 85px;
  margin: 10px;
  
  background: url(${({image})=> image}) no-repeat center;
  background-size: 100% 100%;
`

export default Client