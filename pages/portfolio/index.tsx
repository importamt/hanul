import styled from "styled-components";
import Header from "../../components/organisms/Header/Header";
import Footer from "../../components/organisms/Footer/Footer";
import Hero from "../../components/organisms/Hero/Hero";
import {ImageGrid, Resolution} from "../../components/organisms/Main";
import {useEffect, useState} from "react";
import {IImageGridItem} from "../../components/molecules/ImageGridItem/ImageGridItem";


const Portfolio = () => {

    const [imageGridItems, setImageGridItems] = useState<IImageGridItem[]>([])
    useEffect(() => {
        const imageGridItems = []
        for (let i = 0; i < 38; i++) {
            imageGridItems.push({
                image: `/images/portfolio/grid/${i + 1}.jpg`,
                text: `Work ${i + 1}`,
                span: (i === 15 || i === 29 || i === 35 || i === 36 ? 2 : 1),
            } as IImageGridItem)
        }
        setImageGridItems(imageGridItems)
    }, [])

    return <SPortfolio>
        <Header/>
        <Hero
            image={'/images/portfolio/hero.jpg'}
            height={403}
        />
        <Resolution>
            <b>MISSION</b>
            <p>"축적된 디자인 노하우와 인프라를 바탕으로</p>
            <p>차별화된 디자인을 제안한다</p>
            <p>유연한 소통으로 최대의 공감과 만족을 줄 수 있는</p>
            <p>결과물을 도출한다"</p>
        </Resolution>
        <ImageGrid column={6} row={7} handleGridItemClick={null}
                   imageGridItems={imageGridItems}
                   style={{
                       marginBottom: '100px'
                   }}
        />
        <Footer/>

    </SPortfolio>
}

const SPortfolio = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default Portfolio