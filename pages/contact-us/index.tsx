import styled from "styled-components";
import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import Hero from "../../components/organisms/Hero/Hero";
import {init} from 'emailjs-com';
import {useEffect, useState} from "react";
import {Agreement, CompanyInfo, Fieldset} from "../../components/organisms/Main";

const ContactUs = () => {
    useEffect(() => {
        init('user_VGXgkQQk4KG5Ngjj56mPa')

        // emailjs.send("hanul_test", "template_fxz7eln", {
        //     name: "aa",
        //     phone: "bb",
        //     email: "cc",
        //     message: "dd",
        // }).then()

    }, [])

    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)

    return <SContact>
        <Header/>
        <Hero
            image={'/images/contact-us/hero.jpg'}
            height={403}
        >
            <SBlock/>
            <SHeroText>더 멀리 더 높이 더 크고 바른 이상과 뜻을 가슴에 품고 미래를 이끌어 가는 '한울기획'이 되고자 합니다</SHeroText>
            <SHeroText>"한울"은 언제나 고객의 입장에서 고객의 니즈를 정확하게 파악하고</SHeroText>
            <SHeroText>탁월한 크리에이티브와 풍부한 노하우로 완성도 높은 최고의 발간물을 제작하겠습니다!</SHeroText>
            <SHeroText>고객 곁의 믿을 수 있는 든든한 파트너 한울기획!</SHeroText>
        </Hero>
        <SBlock/>
        <Fieldset/>
        <Agreement/>
        <SSendButton>SEND</SSendButton>
        <CompanyInfo/>
        <SBlock/>
        <Footer/>
    </SContact>
}

const SBlock = styled.div`
  width: 1px;
  height: 130px;
`

const SHeroText = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 400;
`

const SContact = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SSendButton = styled.button`
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  font-weight: 400;
`

export default ContactUs