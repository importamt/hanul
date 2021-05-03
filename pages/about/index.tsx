import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import styled from "styled-components";
import Hero from "../../components/organisms/Hero/Hero";

const About = () => {

    return <SAbout>
        <Header/>
        <Hero
            image={'/images/about/hero.png'}
            height={788}/>
        <Hero
            image={'/images/about/hero2.png'}
            height={1230}/>
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