import styled from "styled-components";
import {CSSProperties, useRef} from "react";
import useResize from "../../../hook/useResize";

interface IHero {
    image: string,
    height: number,
    width?: number,
    style?: CSSProperties
    children?: any,
}

const Hero = (props: IHero) => {
    const heroRef = useRef<HTMLDivElement>()

    const handleResize = () => {
        const hero = heroRef.current
        const width = props.width || 1920
        hero.style.height = document.body.clientWidth / width * props.height + 'px'
    }
    useResize(handleResize)

    return <SHero ref={heroRef} {...props}>
        {props.children}
    </SHero>
}


const SHero = styled.section<IHero>`
  position: relative;
  width: ${({width}) => width ? `${width}px` : '100vw'};
  min-height: ${({height}) => height / 2}px;
  height: ${({height}) => height}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${({image}) => image}) center center no-repeat;
  background-size: cover;
`

export default Hero