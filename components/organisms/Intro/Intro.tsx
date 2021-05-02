import styled from "styled-components";



export enum EIntro {
    main, contactUs, about, portfolio
}

interface IIntroData {
    [type: string]: {
        image: string,
        text: string,
    }
}
const IntroData: IIntroData = {
    [EIntro.main] : {
        image: '/images/main/intro.png',
        text: 'Creative Design Group!',
    }
}
interface IIntro {
    type: EIntro
}
const Intro = ({type} : IIntro) => {
    return <SIntro type={type}>
        {IntroData[type].text}
    </SIntro>
}


const SIntro = styled.section<{
    type: EIntro
}>`
  position: relative;
  width: 100vw;
  height: 400px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  
  background: url(${({type}) => IntroData[type].image}) no-repeat;
  background-size: 100% 100%;
`

export default Intro