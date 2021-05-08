import styled from "styled-components";

import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import Hero from "../../components/organisms/Hero/Hero";
import {init, send} from 'emailjs-com';
import {useEffect, useState} from "react";
import {Agreement, CompanyInfo, Fieldset} from "../../components/organisms/Main";

const ContactUs = () => {
    useEffect(() => {
        init(process.env.EMAILJS_USER_ID)
    }, [])


    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isAgree, setAgree] = useState<boolean>(false)

    const sendEmail = () => {
        if(!isAgree) {
            alert('개인정보 수집 및 이용에 동의해주세요.')
            return
        }
        if( !name || name === '') {
            alert('이름을 입력해주세요.')
            return;
        }
        if( !phone || phone === '') {
            alert('전화번호를 입력해주세요.')
            return;
        }
        if( !email || email === '') {
            alert('이메일을 입력해주세요.')
            return;
        }
        if( !message || message === '') {
            alert('내용을 입력해주세요.')
            return;
        }

        send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, {
            name: name,
            phone: phone,
            email: email,
            message: message,
        }).then(response => {
            console.log("RESPONSE : ", response)
            alert("OK!")
        })
    }

    return <SContact>
        <Header/>
        <Hero
            image={'/images/contact-us/hero.jpg'}
            height={403}
        >
            <SBlock/>
            <SHeroText>더 멀리 더 높이 더 크고 바른 이상과 뜻을 가슴에 품고 </SHeroText>
            <SHeroText>미래를 이끌어 가는 '한울기획'이 되고자 합니다</SHeroText>
            <SHeroText>"한울"은 언제나 고객의 입장에서 고객의 니즈를 정확하게 파악하고</SHeroText>
            <SHeroText>탁월한 크리에이티브와 풍부한 노하우로 완성도 높은 최고의 발간물을 제작하겠습니다!</SHeroText>
            <SHeroText>고객 곁의 믿을 수 있는 든든한 파트너 한울기획!</SHeroText>
        </Hero>
        <SBlock/>
        <Fieldset
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
        />
        <Agreement isAgree={isAgree} setAgree={setAgree}/>
        <SSendButton onClick={sendEmail}>SEND</SSendButton>
        <CompanyInfo/>
        <Footer/>
    </SContact>
}


const SBlock = styled.div`
  width: 1px;
  height: 60px;

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    height: 10vw;
  }
`

const SHeroText = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 22px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  font-weight: 400;

  @media only screen and (min-width: ${({theme}) => theme.media.tablet}px) {
    line-height: 2vw;
    font-size: 14px;
  }
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