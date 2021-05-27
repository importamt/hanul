import styled from "styled-components";
import ReactDOMServer from 'react-dom/server';
import {useEffect} from "react";
import Link from 'next/link'

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
                <a href={'tel:044-998-0069'}>044-998-0069</a>
            </li>
            <li>
                세종특별자치시 시청대로 213 2층 206호(보람동, 금강베네치아)
            </li>
            <li>
                <a href={'tel:010-5352-8391'}>010-5352-8391</a>
            </li>
            <li>hannuul@naver.com</li>
            <li>
                <Link href={'/'}>
                    <SHomepageButton>www.hannuul.com</SHomepageButton>
                </Link>
            </li>
        </SEtc>
    </SCompanyInfo>
}

const SHomepageButton = styled.button`
  cursor: pointer;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;

  border-radius: 10px;
  width: 180px;
  height: 30px;
  color: white;
  background-color: #0475f4;

  &:hover {
    background-color: rgba(113, 166, 226, 0.75);
  }

  &:active {
    background-color: #0475f4;
  }
`

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

const mobileIcon = '/images/contact-us/mobile_icon.png'
const addressIcon = '/images/contact-us/address_icon.png'
const phoneIcon = '/images/contact-us/phone_icon.png'
const emailIcon = '/images/contact-us/email_icon.png'
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
    font-size: 18px;
    font-weight: 300;
    color: black;
    line-height: 30px;
    display: flex;
    align-items: center;
  }

  & li:before {
    content: '';
    min-width: 33px;
    height: 33px;
    //background: black;
    display: inline-block;
    margin-right: 20px;
  }

  & li:nth-child(1):before {
    background: url(${phoneIcon}) no-repeat;
    background-size: 100% 100%;
  }

  & li:nth-child(3):before {
    background: url(${mobileIcon}) no-repeat;
    background-size: 100% 100%;
  }

  & li:nth-child(2):before {
    background: url(${addressIcon}) no-repeat;
    background-size: 100% 100%;
  }

  & li:nth-child(4):before {
    background: url(${emailIcon}) no-repeat;
    background-size: 100% 100%;
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
