import styled from "styled-components";


export const CompanyInfo = () => {

    return <SCompanyInfo>
        <SMap/>
        <SEtc/>
    </SCompanyInfo>
}

const SCompanyInfo = styled.section`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const SMap = styled.section`
  width: 30%;
  height: 300px;
  background: gray;
`

const SEtc = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  background: tomato;
`