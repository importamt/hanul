import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";

const SHeader = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.main};
`

const Header = () => <SHeader>
    <Logo/>
    <Navigation/>
</SHeader>

export default Header