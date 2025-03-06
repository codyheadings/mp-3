import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const StyledNav = styled.nav`
    width: 30%;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`

const StyledItem = styled.li`
    font-size: calc(3px + 2vw);
    width: 90%;
    background-color: #156064ff;
    padding: 2vh 2vw;
    margin: 1vh auto;
    text-align: center;
    @media screen and (max-width: 800px){
        font-size: calc(2px + 1.5vw);
        padding: 1% 0.5%;
        margin: 1% 0.5%;
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #2e282aff;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding: 1vh 1vw;
    height: 100%;
    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #2e282aff;
        list-style: none;
        padding: 0;
    }
`

export default function Nav(){
    return (
        <StyledNav>
            <StyledUl>
                <StyledItem><StyledLink to={"/"}>Home</StyledLink></StyledItem>
                <StyledItem><StyledLink to={"/education"}>Education</StyledLink></StyledItem>
                <StyledItem><StyledLink to={"/work"}>Employment</StyledLink></StyledItem>
                <StyledItem><StyledLink to={"/leadership"}>Leadership</StyledLink></StyledItem>
                <StyledItem><StyledLink to={"/skills"}>Skills</StyledLink></StyledItem>
                <StyledItem><StyledLink to={"/projects"}>Projects</StyledLink></StyledItem>
            </StyledUl>
        </StyledNav>
    )
}