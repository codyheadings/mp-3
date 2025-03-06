import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1vh 1vw;
    background-color: #F5F5F5;
    position: relative;
    bottom: 0;
    @media screen and (max-width: 800px){
        padding: 2vh 1vw;
    }
`

const StyledLink = styled(Link)`
    color: #156064ff
`

export default function Footer(){
    return (
        <StyledFooter>
            <p>All Rights Reserved by Cody Headings <StyledLink to="">Credits</StyledLink> &copy; 2025</p>
        </StyledFooter>
    )
}