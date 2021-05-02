import styled from "styled-components";
import Link from "next/link";

const logoImage = '/images/common/logo.png'
const SLogo = styled.figure`
  cursor: pointer;
  position: relative;
  width: 105px;
  height: 105px;
  background: url(${logoImage}) no-repeat;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = () => <Link href={'/'}>
    {/*<>*/}
    {/*<b>HANUL Planning</b>*/}
    <SLogo/>
    {/*<b>Design Group</b>*/}
    {/*</>*/}
</Link>

export default Logo