import styled from "styled-components";
import React from "react";

const logoImage = '/images/common/logo.png'
const SLogo = styled.a`
  cursor: pointer;
  position: relative;
  width: 396px;
  height: 106px;
  background: url(${logoImage}) center center no-repeat;
  background-size: 75% 75%;

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    background-size: 100% 100%;
  }
`

const Logo = React.forwardRef(
    (props, ref: any) => <SLogo {...props} ref={ref}/>
)

export default Logo