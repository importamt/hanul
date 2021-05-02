import styled from "styled-components";

export interface IImageGridItem {
    image: string | null,
    text: string | null,
}

const ImageGridItem = ({image, text}: IImageGridItem) => <SImageGridItem image={image} text={text}/>

const SImageGridItem = styled.li<{
    image: string,
    text: string,
}>`
  width: 100%;
  height: 100%;
  background: ${({image}) => image?`url(${image})`:'#ff000020'} no-repeat center center;
  background-size: 50%;
  position: relative;
  
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
    content: '${({text}) => text}';
    opacity: 0.5;
    background-color: black;
  }
`

export default ImageGridItem