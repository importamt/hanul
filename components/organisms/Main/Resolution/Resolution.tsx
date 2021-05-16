import styled from "styled-components";

export const Resolution = ({children}) => <SResolution>
    {children}
</SResolution>

const grayLogo = '/images/common/gray_logo.png'
const SResolution = styled.section`
  width: 100%;
  min-height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  position: relative;
  overflow: hidden;

  & b {
    color: black;
    font-size: 27px;
    font-weight: 600;
    line-height: 60px;
    text-align: center;
  }

  & p {
    color: black;
    font-size: 15px;
    line-height: 28px;
    font-weight: 300;
    text-align: center;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 1vw;
    min-width: 200px;
    width: 25vw;
    max-width: 350px;
    min-height: 200px;
    height: 25vw;
    max-height: 350px;
    background: url(${grayLogo}) no-repeat 0 -5vw;
    background-size: 100% 100%;
  }
`