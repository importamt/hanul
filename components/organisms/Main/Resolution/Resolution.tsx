import styled from "styled-components";

export const Resolution = ({children}) => <SResolution>
    {children}
</SResolution>
const SResolution = styled.section`
  height: 300px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;

  & b {

    color: black;
    font-size: 30px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
  }

  & p {
    color: black;
    font-size: 13px;
    line-height: 20px;
    font-weight: 300;
    text-align: center;
  }
`