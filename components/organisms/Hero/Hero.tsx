import styled from "styled-components";
import {CSSProperties} from "react";

interface IHero {
    image: string,
    height: number,
    width?: number,
    style?: CSSProperties
    children?: any,
}
const Hero = (props : IHero) => {
    return <SHero {...props}>
        {props.children}
    </SHero>
}


const SHero = styled.section<IHero>`
  position: relative;
  width: ${({width}) => width?`${width}px`:'100vw'};
  height: ${({height}) => height}px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: url(${({image}) => image}) center center no-repeat;
  background-size: cover;
`

export default Hero