import styled from "styled-components";
import {MouseEventHandler, ReactElement} from "react";

export interface IImageGridItem {
    image: string | null,
    text: string | ReactElement | null,
    handleGridItemClick?: MouseEventHandler<HTMLLIElement>,
    span?: number
}

const ImageGridItem = ({image, text, handleGridItemClick, span = 1}: IImageGridItem) =>
    <SImageGridItem image={image} span={span} onClick={handleGridItemClick}>
        <SHover>{text}</SHover>
    </SImageGridItem>

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
    background: #000000C0;

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
    span: number,
}>`
  width: 100%;
  height: 100%;
  background: ${({image}) => image ? `url(${image})` : '#ff000020'} no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  grid-column: span ${({span}) => span};


  &:hover {
    color: white;
    background-blend-mode: darken;
  }
`

export default ImageGridItem