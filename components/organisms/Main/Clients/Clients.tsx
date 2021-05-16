import styled from "styled-components";
import Client from "../../../molecules/Client/Client";

export const Clients = () => {

    const clients = []
    for (let i = 0; i < 12; i++) {
        clients.push(
            <Client key={i} image={`/images/about/client${i + 1}.png`}/>
        )
    }

    return <SClientsWrap>
        <SClientsTitle image={'/images/about/clients_title.png'}/>
        <SClients>
            {clients}
        </SClients>
    </SClientsWrap>
}

const SClientsTitle = styled.h1<{
    image: string
}>`
  width: 300px;
  height: 40px;
  margin: 20px 0;
  background: url(${({image}) => image}) no-repeat;
  background-size: 100% 100%;
`

const SClientsWrap = styled.section`
  margin: 50px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SClients = styled.ul`
  display: flex;
  padding: 0 18vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`