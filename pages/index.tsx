import Hero from "../components/organisms/Hero/Hero";
import Footer from "../components/organisms/Footer/Footer";
import {ImageGrid, Resolution} from "../components/organisms/Main";
import styled from "styled-components";
import {IImageGridItem} from "../components/molecules/ImageGridItem/ImageGridItem";
import {useEffect, useState} from "react";
import Header from "../components/organisms/Header/Header";
import Popup, {IPopup} from "../components/organisms/Popup/Popup";


const MainPage = () => {

    const [selectedPopup, setSelectedPopup] = useState<IPopup>(null)
    const [imageGridItems, setImageGridItems] = useState<IImageGridItem[]>([])

    const texts = [
        <>
            <SImageGridTitle>2019 원자력 운전 연보</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>한국원자력기술원</SImageGridText>
        </>,

        <>
            <SImageGridTitle>교육훈련안내</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>대한상공회의소</SImageGridText>
        </>,

        <>
            <SImageGridTitle>선박법 법령집</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>해양수산부</SImageGridText>
        </>,

        <>
            <SImageGridTitle>학교안내 브로셔</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>쎈테니얼크리스챤스쿨</SImageGridText>
        </>,

        <>
            <SImageGridTitle>30년사(백서)</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>한국원자력기술원</SImageGridText>
        </>,

        <>
            <SImageGridTitle>웹용지방의정브리프</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>한국지방행정연구원</SImageGridText>
        </>,

        <>
            <SImageGridTitle>패키지 디자인</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>메일유업</SImageGridText>
        </>,

        <>
            <SImageGridTitle>비타플러스씨</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>패키지 디자인</SImageGridText>
        </>,

        <>
            <SImageGridTitle>덴치로</SImageGridTitle>
            <SImageGridDot className={'dot'}/>
            <SImageGridText>정우제약</SImageGridText>
        </>,
    ]


    useEffect(() => {
        const imageGridItems = []
        for (let i = 0; i < 9; i++) {
            imageGridItems.push({
                image: `/images/main/grid${i + 1}.jpg`,
                text: texts[i]
            } as IImageGridItem)
        }
        setImageGridItems(imageGridItems)
    }, [])


    return <SMainPage>
        {selectedPopup && <Popup {...selectedPopup} handleCloseClick={() => setSelectedPopup(null)}/>}
        <Header/>
        <Hero
            image={'/images/main/hero.png'}
            height={403}>
            <SHeroText>Creative Design Group!</SHeroText>
        </Hero>
        <Resolution>
            <b>VISION 2021</b>
            <p>"더 멀리 더 높이 비상하는 디자인 전문기업"</p>
        </Resolution>
        <ImageGrid column={3} row={3} imageGridItems={imageGridItems} handleGridItemClick={index => setSelectedPopup({
            image: `/images/main/popup${index}.jpg`
        } as IPopup)}/>
        <Footer/>
    </SMainPage>
}

const SImageGridText = styled.b`
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 50px;
  font-size: 7px;

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    font-size: 16px;
  }
`

const SImageGridTitle = styled(SImageGridText)`
  font-size: 10px;

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    font-size: 20px;

  }
`

export const SImageGridDot = styled.figure`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: white;
  line-height: 50px;
`

const SHeroText = styled.b`
  cursor: pointer;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  
  &:hover {
    transition: color 2s;
    color: white;
  }

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    font-size: 30px;
  }
`

const SMainPage = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default MainPage