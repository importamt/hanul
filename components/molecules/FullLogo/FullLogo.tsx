import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo";


const FullLogo = ({href}: { href?: string }) => <SFullLogo href={href}>
    <b>HANUL Planning</b>
    <Logo/>
    <b>Design Group</b>
</SFullLogo>

const SFullLogo = styled.a`

  display: flex;
  justify-content: center;
  align-items: center;
  
  & b {
    font-family: 'Noto Sans KR', sans-serif;

    margin: 0 10px;
    color: white;
    font-size: 15px;
  }
`

export default FullLogo