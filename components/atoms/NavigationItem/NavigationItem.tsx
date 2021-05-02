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
  height: 30px;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;

`

export default NavigationItem