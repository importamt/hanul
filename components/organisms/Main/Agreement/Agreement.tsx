import styled from "styled-components";

interface IAgreement {
    isAgree: boolean,
    setAgree: Function,
}
export const Agreement = ({isAgree, setAgree}: IAgreement) => {
    return <SAgreementWrap>

        <SAgreement>
            한울기획은 기업/단체 및 개인의 정보 수집 및 이용 등 처리에 있어 아래의 사항을 관계법령에 따라 고지하고 안내해 드립니다.<br/>
            1. 정보수집의 이용 목적 : 상담 및 진행<br/>
            2. 수집/이용 항목 : 이름, 휴대전화, 이메일, 상담내용<br/>
            3. 보유 및 이용기간 : 상담 종료후 6개월, 정보제공자의 삭제 요청시 즉시<br/>
            4. 개인정보처리담당 : 전화 044-998-0069 / 이메일 hannuul@naver.com<br/>
        </SAgreement>
        <SAgreementCheck>
            개인정보 수집 및 이용에 동의합니다.
            <input type={'checkbox'} checked={isAgree} onChange={event=>setAgree(event.target.checked)}/>
        </SAgreementCheck>

    </SAgreementWrap>
}



const SAgreementWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  align-items: center;
  
  min-width: 220px;
  width: 35%;
  max-width: 720px;
  
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
  width: 100%;
  
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
  
  padding: 10px 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 400;
`