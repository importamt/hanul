import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import styled from "styled-components";
import Hero from "../../components/organisms/Hero/Hero";
import {Clients, Resolution} from "../../components/organisms/Main";

const About = () => {

    return <SAbout>
        <Header/>
        <Hero
            image={'/images/about/hero.jpg'}
            height={403}/>
        <Resolution>
            <b>CORE VALUE</b>
            <p>소통 / 열정 / 센스 / 신뢰</p>
        </Resolution>
        <Hero
            image={'/images/about/hero2.png'}
            height={900}/>
        <Clients/>
        <Footer/>
    </SAbout>
}
const SAbout = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default About