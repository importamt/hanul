import styled from "styled-components";
import ReactDOMServer from 'react-dom/server';
import {useEffect} from "react";

export const CompanyInfo = () => {

    useEffect(() => {
        const script = document.createElement('script')
        script.async = true
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_KEY}&autoload=false`
        document.head.appendChild(script)

        script.onload = () => {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('kakaoMap')
                const options = {
                    center: new kakao.maps.LatLng(36.4836290781446, 127.293550928346),
                    level: 3
                }
                const map = new kakao.maps.Map(mapContainer, options)
                const marker = new kakao.maps.Marker({
                    // 지도 중심좌표에 마커를 생성합니다
                    position: map.getCenter()
                });
                marker.setMap(map)

                const content = <SOverlay href={'http://kko.to/r1moGrRDM'} target={'_blank'}>세종특별자치시 시청대로 213</SOverlay>
                const overlay = new kakao.maps.CustomOverlay({
                    content: ReactDOMServer.renderToString(content),
                    map: map,
                    position: marker.getPosition(),
                    yAnchor: 4,
                })

                kakao.maps.event.addListener(marker, 'click', () => {
                    overlay.setMap(map)
                })
            })
        }

    }, [])

    return <SCompanyInfo>
        <SMap id={'kakaoMap'}/>
        <SEtc>
            <li>
                <a href={'tel:044-250-8391'}>044-250-8391</a>
            </li>
            <li>
                세종특별자치시 시청대로 213 2층 206호(보람동, 금강베네치아)
            </li>
            <li>
                <a href={'tel:010-5352-8391'}>010-5352-8391</a>
            </li>
            <li>hannuul@naver.com</li>
        </SEtc>
    </SCompanyInfo>
}

const SCompanyInfo = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: ${({theme}) => theme.media.tablet}px) {
    flex-direction: row;
  }
`

const SMap = styled.section`
  width: 400px;
  height: 400px;
  margin: 50px 20px;
  background: gray;
  overflow: hidden;
  border-radius: 15px;
`

const SEtc = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 50px 20px;
  //background: tomato;
  justify-content: space-around;

  & li, & a {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: black;
    line-height: 30px;
    display: flex;
    align-items: center;
  }

  & li:before {
    content: '';
    min-width: 30px;
    height: 30px;
    background: black;
    display: inline-block;
    margin-right: 20px;
  }
`

const SOverlay = styled.a`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: white;
  flex-direction: column;
  padding: 10px 15px;
  border-radius: 15px;
  background: #0475f4;

  &:after {
    content: '(카카오맵에서 열기)';
    margin-left: 10px;
    color: lightgray;
  }
`
