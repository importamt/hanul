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
            <ImageGridItem key={index} image={imageGridItem.image} span={imageGridItem.span} text={imageGridItem.text}
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

  display: grid;
  grid-template-rows: repeat(${({row}) => row}, 1fr);
  column-count: ${({row}) => row + 1};
  grid-template-columns: repeat(${({column}) => column}, 1fr);
`