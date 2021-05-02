import styled from "styled-components";
import Navigation from "../../molecules/Navigation/Navigation";
import Link from "next/link";
import FullLogo from "../../molecules/FullLogo/FullLogo";

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
    <Link href={'/'} passHref>
        <FullLogo/>
    </Link>
    <Navigation/>
</SHeader>

export default Header