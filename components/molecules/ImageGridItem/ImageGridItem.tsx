import styled from "styled-components";
import {MouseEventHandler, ReactElement} from "react";

export interface IImageGridItem {
    image: string | null,
    text: string | ReactElement | null,
    handleGridItemClick?: MouseEventHandler<HTMLLIElement>,
    column: number,
    span?: number
}

const ImageGridItem = ({image, text, handleGridItemClick, column, span = 1}: IImageGridItem) =>
    <SImageGridItem image={image} column={column} span={span} onClick={handleGridItemClick}>
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
    column: number,
    span: number,
}>`
  width: calc(100% / ${({column,span}) => column * 1/span});
  height: calc(100% / ${({column}) => column});
  background: ${({image}) => image ? `url(${image})` : '#ff000020'} no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  grid-column: span ${({span}) => span};
  float: left;

  &:hover {
    color: white;
    background-blend-mode: darken;
  }
`

export default ImageGridItem