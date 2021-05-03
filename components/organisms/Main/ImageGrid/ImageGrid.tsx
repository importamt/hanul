import styled from "styled-components";
import ImageGridItem, {IImageGridItem} from "../../../molecules/ImageGridItem/ImageGridItem";

interface IImageGrid {
    column: number,
    row: number,
    handleGridItemClick: Function,
    imageGridItems: IImageGridItem[]
}

const drawGrid = (column: number, row: number, handleGridItemClick:Function, imageGridItems: IImageGridItem[]) => {
    const imageGridItemComponents = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const index = i * row + j
            const imageGridItem = imageGridItems[index]
            if (imageGridItem) {
                imageGridItemComponents.push(
                    <ImageGridItem key={index} image={imageGridItem.image} text={imageGridItem.text} handleGridItemClick={() => handleGridItemClick(index+1)}/>)
            } else {
                imageGridItemComponents.push(<ImageGridItem key={index} image={null} text={null}/>)
            }
        }
    }

    return imageGridItemComponents
}
export const ImageGrid = ({column, row, handleGridItemClick, imageGridItems}: IImageGrid) => {
    return <SImageGrid column={column} row={row}>
        {drawGrid(column, row, handleGridItemClick, imageGridItems)}
    </SImageGrid>
}

const SImageGrid = styled.ul<{
    column: number,
    row: number,
}>`
  
  max-width: 1440px;
  width: 100vw;
  max-height: 1440px;
  height: 100vw;
  
  display: grid;
  grid-template-rows: repeat(${({row}) => row}, 1fr);
  grid-template-columns: repeat(${({column}) => column}, 1fr);
`