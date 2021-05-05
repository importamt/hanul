import styled from "styled-components";


export const Agreement = () => {
    return <SAgreementWrap>

        <SAgreement>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
            개인정보 관련 내용 abc<br/>
        </SAgreement>
        <SAgreementCheck>
            개인정보 수집 및 이용에 동의합니다.
            <input type={'checkbox'} />
        </SAgreementCheck>

    </SAgreementWrap>
}



const SAgreementWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  &:before {
    content: '개인정보 수집 및 이용에 대한 안내';
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0;
  }
`

const SAgreement = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  width: 720px;
  padding: 20px 30px;
  
  min-height: 50px;
  height: auto;
  max-height: 200px;
  overflow: hidden;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
`

const SAgreementCheck = styled.label`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 400;
`