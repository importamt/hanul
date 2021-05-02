import styled from "styled-components";


const Footer = () => <SFooter>
    <p>(주)한울기획</p>
    <p>30151 세종특별자치시 시청대로 213 2층 206호(보람동, 금강베네치아)  |  대표자 : 박정하  |  사업자등록번호 : 889-12-01176  |  전화번호 : 044-212-8391  |  이메일 : hannuul@naver.com</p>
    <p>COPYRIGHT © hanul. ALL RIGHTS RESERVED</p>
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
  
  & p {
    color: white;
    font-size: 12px;
    line-height: 30px;
    font-family: 'Noto Sans KR', sans-serif;

  }
`

export default Footer