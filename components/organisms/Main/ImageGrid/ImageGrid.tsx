import styled from "styled-components";
import ImageGridItem, {IImageGridItem} from "../../../molecules/ImageGridItem/ImageGridItem";
import {CSSProperties, useRef} from "react";
import useResize from "../../../../hook/useResize";

interface IImageGrid {
    column: number,
    row: number,
    handleGridItemClick: Function,
    imageGridItems: IImageGridItem[]
    style?: CSSProperties
}

const drawGrid = (column: number, row: number, handleGridItemClick: Function, imageGridItems: IImageGridItem[]) => {
    return imageGridItems
        .map((imageGridItem, index) =>
            <ImageGridItem key={index} image={imageGridItem.image} column={column} span={imageGridItem.span} text={imageGridItem.text}
                           handleGridItemClick={() => handleGridItemClick && handleGridItemClick(index + 1)}/>)
}
export const ImageGrid = ({column, row, handleGridItemClick, imageGridItems, style}: IImageGrid) => {

    const imageGridRef = useRef<HTMLUListElement>()

    const handleResize = () => {
        const imageGrid = imageGridRef.current
        imageGrid.style.height = ((imageGrid.offsetWidth / column) * row) + 'px'
    }

    useResize(handleResize)

    return <SImageGrid ref={imageGridRef} column={column} row={row} style={style}>
        {drawGrid(column, row, handleGridItemClick, imageGridItems)}
    </SImageGrid>
}

const SImageGrid = styled.ul<{
    column: number,
    row: number,
}>`

  max-width: 1280px;
  width: 100vw;
  overflow: hidden;
  
  display: flex;
  flex-wrap: wrap;
  
`