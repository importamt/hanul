import Hero from "../components/organisms/Hero/Hero";
import Footer from "../components/organisms/Footer/Footer";
import Resolution from "../components/organisms/Main/Resolution/Resolution";
import {ImageGrid} from "../components/organisms/Main";
import styled from "styled-components";
import {IImageGridItem} from "../components/molecules/ImageGridItem/ImageGridItem";
import {useEffect, useState} from "react";
import Header from "../components/organisms/Header/Header";
import Popup, {IPopup} from "../components/organisms/Popup/Popup";


const MainPage = () => {

    const [selectedPopup, setSelectedPopup] = useState<IPopup>(null)
    const [imageGridItems, setImageGridItems] = useState<IImageGridItem[]>([])
    useEffect(() => {
        const imageGridItems = []
        for (let i = 0; i < 9; i++) {
            imageGridItems.push({
                image: `/images/main/grid${i + 1}.jpg`,
                text: `Template String ${i + 1}`
            } as IImageGridItem)
        }
        setImageGridItems(imageGridItems)
    }, [])


    return <SMainPage>
        {selectedPopup && <Popup {...selectedPopup} handleCloseClick={() => setSelectedPopup(null)}/>}
        <Header/>
        <Hero
            image={'/images/main/hero.png'}
            text={'Creative Design Group!'}
            height={403}
        />
        <Resolution/>
        <ImageGrid column={3} row={3} imageGridItems={imageGridItems} handleGridItemClick={index => setSelectedPopup({
            image: `/images/main/popup${index}.jpg`
        } as IPopup)}/>
        <Footer/>
    </SMainPage>
}
const SMainPage = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default MainPage