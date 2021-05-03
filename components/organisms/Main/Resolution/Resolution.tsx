import styled from "styled-components";


const Resolution = () => <SResolution>
    <b>VISION 2021</b>

    <p>"더 멀리 더 높이 비상하는 디자인 전문기업"</p>
    {/*<p>"한울"은 언제나 고객의 입장에서 고객의 니즈를 정확하게 파악하고</p>*/}
    {/*<p>탁월한 크리에이티브와 풍부한 노하우로 완성도 높은 최고의 발간물을 제작하겠습니다!</p>*/}
    {/*<p>고객 곁의 믿을 수 있는 든든한 파트너  한울기획!</p>*/}
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
    font-size: 12px;
    line-height: 20px;
    font-weight: 200;
    text-align: center;
  }
`

export default Resolution