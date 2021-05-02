import Header from "../../components/organisms/Header/Header";
import Intro, {EIntro} from "../../components/organisms/Intro/Intro";
import Footer from "../../components/organisms/Footer/Footer";
import styled from "styled-components";

const About = () => {

    return <SAbout>
        <Header/>
        <Intro type={EIntro.about}/>
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