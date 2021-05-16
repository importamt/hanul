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

    const texts = ['2019 원자력 운전 연보 \\A 한국원자력기술원',
        '교육훈련안내 \\A 대한상공회의소', '선박법 법령집 \\A 해양수산부',
        '학교안내 브로셔 \\A 쎈테니얼크리스챤스쿨', '30년사(백서) \\A ' +
        '한국원자력기술원', '웹용지방의정브리프 \\A ' +
        '한국지방행정연구원', '패키지 디자인 \\A ' +
        '메일유업', '비타플러스씨 \\A ' +
        '패키지 디자인', '덴치로 \\A ' +
        '정우제약'
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