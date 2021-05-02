import styled from "styled-components";
import NavigationItem from "../../atoms/NavigationItem/NavigationItem";


const Navigation = () => <SNavigation>
    <NavigationItem url={'/about'}>about</NavigationItem>
    <NavigationItem url={'/portfolio'}>portfolio</NavigationItem>
    <NavigationItem url={'/contact-us'}>contact us</NavigationItem>
</SNavigation>

const SNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`

export default Navigation