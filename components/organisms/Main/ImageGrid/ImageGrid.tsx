import styled from "styled-components";
import ImageGridItem, {IImageGridItem} from "../../../molecules/ImageGridItem/ImageGridItem";

interface IImageGrid {
    column: number,
    row: number,
    imageGridItems: IImageGridItem[]
}

const drawGrid = (column: number, row: number, imageGridItems: IImageGridItem[]) => {
    const imageGridItemComponents = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const index = i * row + j
            const imageGridItem = imageGridItems[index]
            if (imageGridItem) {
                imageGridItemComponents.push(
                    <ImageGridItem key={index} image={imageGridItem.image} text={imageGridItem.text}/>)
            } else {
                imageGridItemComponents.push(<ImageGridItem key={index} image={null} text={null}/>)
            }
        }
    }

    return imageGridItemComponents
}
export const ImageGrid = ({column, row, imageGridItems}: IImageGrid) => {
    return <SImageGrid column={column} row={row}>
        {drawGrid(column, row, imageGridItems)}
    </SImageGrid>
}

const SImageGrid = styled.ul<{
    column: number,
    row: number,
}>`
  
  width: 100vw;
  height: 100vw;
  
  display: grid;
  grid-template-rows: repeat(${({row}) => row}, 1fr);
  grid-template-columns: repeat(${({column}) => column}, 1fr);
`