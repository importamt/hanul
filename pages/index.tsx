import Intro, {EIntro} from "../components/organisms/Intro/Intro";
import Footer from "../components/organisms/Footer/Footer";
import Resolution from "../components/organisms/Main/Resolution/Resolution";
import {ImageGrid} from "../components/organisms/Main";
import styled from "styled-components";
import {IImageGridItem} from "../components/molecules/ImageGridItem/ImageGridItem";
import {useEffect, useState} from "react";
import Header from "../components/organisms/Header/Header";


const MainPage = () => {

    const [imageGridItems, setImageGridItems] = useState<IImageGridItem[]>([])
    useEffect(() => {
        const imageGridItems = []
        for (let i = 0; i < 9; i++) {
            imageGridItems.push({
                image: `/images/main/grid${i + 1}.png`,
                text: `Template String ${i + 1}`
            } as IImageGridItem)
        }
        setImageGridItems(imageGridItems)
    }, [])


    return <SMainPage>
        <Header/>
        <Intro type={EIntro.main}/>
        <Resolution/>
        <ImageGrid column={3} row={3} imageGridItems={imageGridItems}/>
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