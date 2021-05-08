import styled from "styled-components";
import Link from 'next/link'

export interface INavigationItem {
    children: string,
    url: string,
}

const NavigationItem = ({url, children}: INavigationItem) =>
    <Link href={url}>
        <SNavigationItem>
            {children}
        </SNavigationItem>
    </Link>


const SNavigationItem = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  min-width: 100px;
  width: auto;
  height: 25px;
  border-radius: 15px;
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 10px;
  
  &:hover {
    transition: color 500ms, border 500ms;
    border: 1px solid deepskyblue;
    color: deepskyblue;
  }

  @media only screen and (min-width: ${({theme}) => theme.media.mobile}px) {
    font-size: 15px;
    margin: 5px 30px;
  }
`

export default NavigationItem