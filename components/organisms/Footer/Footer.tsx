import styled from "styled-components";


const Footer = () => <SFooter>
    <strong>한울기획</strong>
    <p>30151 세종특별자치시 시청대로 213 2층 206호(보람동, 금강베네치아) 대표자 : 박정하  |  사업자등록번호 : 889-12-01176  |  전화번호 : 044-212-8391  |  이메일 : hannuul@naver.com</p>
    <p>COPYRIGHT © hannuul. ALL RIGHTS RESERVED</p>
</SFooter>

const SFooter = styled.footer`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  flex-direction: column;

  background: ${({theme}) => theme.colors.main};
  
  & p, & strong {
    color: white;
    font-size: 1.5vw;
    line-height: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
  }
  & strong {
    font-size: 1.8vw;
  }

  @media only screen and (min-width: ${({theme}) => theme.media.tablet}px) {
    & p, & strong {
      font-size: 14px;
      margin: 5px 30px;
    }

    & strong {
      font-size: 16px;
    }
  }
`

export default Footer