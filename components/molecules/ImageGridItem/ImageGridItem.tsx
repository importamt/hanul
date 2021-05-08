import styled from "styled-components";
import {MouseEventHandler} from "react";

export interface IImageGridItem {
    image: string | null,
    text: string | null,
    handleGridItemClick?: MouseEventHandler<HTMLLIElement>,
    span?: number
}

const ImageGridItem = ({image, text, handleGridItemClick, span=1}: IImageGridItem) => <SImageGridItem image={image} text={text} span={span} onClick={handleGridItemClick}/>

const SImageGridItem = styled.li<{
    image: string,
    text: string,
    span: number,
}>`
  width: 100%;
  height: 100%;
  background: ${({image}) => image?`url(${image})`:'#ff000020'} no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  grid-column: span ${({span})=>span};

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: '';
  }
  
  &:nth-child(even):before {
    background-color: ${({theme})=> theme.colors.subOne};
  }

  &:nth-child(odd):before {
    background-color: ${({theme})=> theme.colors.subTwo};
  }
    
  &:after {
    content: '';
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 500ms;
  }
  
  &:hover:after {
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 10px;
    
    content: '${({text}) => text}';
    opacity: 0.5;
    background-color: black;
    
    text-align: center;

    @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
      font-size: 15px;
    }
  }
`

export default ImageGridItem