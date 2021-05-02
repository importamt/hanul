import styled from "styled-components";

const logoImage = '/images/common/logo.png'
const SLogo = styled.a`
  cursor: pointer;
  position: relative;
  width: 105px;
  height: 105px;
  background: url(${logoImage}) no-repeat;
  background-size: 100% 100%;
`

const Logo = () => <SLogo/>

export default Logo