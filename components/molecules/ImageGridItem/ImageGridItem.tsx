import styled from "styled-components";
import {MouseEventHandler, ReactElement, useRef} from "react";
import useResize from "../../../hook/useResize";

export interface IImageGridItem {
    image: string | null,
    text: string | ReactElement | null,
    handleGridItemClick?: MouseEventHandler<HTMLLIElement>,
    column: number,
    span?: number
}

const ImageGridItem = ({image, text, handleGridItemClick, column, span = 1}: IImageGridItem) => {

    const imageGridRefItem = useRef<HTMLLIElement>()

    const handleResize = () => {
        const imageGridItem = imageGridRefItem.current
        imageGridItem.style.height = (imageGridItem.offsetWidth / span) + 'px'
    }

    useResize(handleResize)

    return <SImageGridItem ref={imageGridRefItem} image={image} column={column} span={span} onClick={handleGridItemClick}>
        <SHover>{text}</SHover>
    </SImageGridItem>
}

const SHover = styled.aside`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;

  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: transparent;
  background-color: transparent;

  &:hover {
    transition: background-color 500ms, color 500ms;
    color: white;
    background: rgba(0,0,0, 0.7);

    & .dot {
      background-color: white;
    }
  }

  & .dot {
    transition: background-color 500ms, color 500ms;
    background-color: transparent;
  }
`

const SImageGridItem = styled.li<{
    image: string,
    column: number,
    span: number,
}>`
  display: inline-block;
  width: calc(100% / ${({column,span}) => column * 1/span});
   height: calc(100% / ${({column}) => column} - 1px);
  background: ${({image}) => image ? `url(${image})` : '#000000'} no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  
  &:hover {
    color: white;
  }
`

export default ImageGridItem