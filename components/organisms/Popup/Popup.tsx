import styled from "styled-components";
import {MouseEventHandler} from "react";

export interface IPopup {
    image: string,
    handleCloseClick: MouseEventHandler<HTMLButtonElement>,
}

const Popup = ({image,handleCloseClick}: IPopup) => {
    return <SBackground>
        <SPopup image={image}>
            <button onClick={handleCloseClick}/>
        </SPopup>
    </SBackground>
}

const SBackground = styled.aside`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  background: rgba(0, 0, 0, 0.5);
`

const SPopup = styled.aside<{
    image: string
}>`
  width: 75%;
  height: 75%;
  position: relative;
  background: ${({image}) => image ? `url(${image}) center center no-repeat` : 'darkgray'};
  background-size: contain;
  
  & > button {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;

    width: 30px;
    height: 30px;
    background: url('/images/common/close_normal.png') no-repeat;
    background-size: 100% 100%;
  }

  & > button:hover {
    background: url('/images/common/close_hover.png') no-repeat;
    background-size: 100% 100%;
  }
`

export default Popup