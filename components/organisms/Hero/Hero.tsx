import styled from "styled-components";



export enum EHero {
    main, contactUs, about, portfolio
}

interface IHeroData {
    [type: string]: {
        image: string,
        text: string,
        width?: number,
        height?: number,
    }
}
const HeroData: IHeroData = {
    [EHero.main] : {
        image: '/images/main/intro.png',
        text: 'Creative Design Group!',
        width: 1920,
        height: 403,
    },
    [EHero.about] : {
        image: '/images/about/intro.png',
        text: '',
        width: 1920,
        height: 788,
    }
}
interface IHero {
    image: string,
    height: number,
    width?: number,
    text?: string,
}
const Hero = (props : IHero) => {
    return <SHero {...props}>
        {props.text}
    </SHero>
}


const SHero = styled.section<IHero>`
  position: relative;
  width: ${({width}) => width?`${width}px`:'100vw'};
  height: ${({height}) => height}px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  
  background: url(${({image}) => image}) center center no-repeat;
  background-size: cover;
`

export default Hero