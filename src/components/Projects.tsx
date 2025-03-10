import styled from "styled-components";
import Calculator from "./Calculator.tsx";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const StyledLink  = styled(Link)`
    margin: 1vh 1vw;
    font-size: calc(10px + .5vw);
    color: #156064ff;
    text-align: center;
    @media screen and (max-width: 800px){
        min-width: 50px;
    }
`

const StyledH4 = styled.h4`
    font-size: calc(12px + 1vw);
    margin: 1vh 1vw;
    text-align: center;
    padding-top: 5vh;
`

const StyledImg = styled.img`
    margin: 3vh auto;
    width: 10%;
    height: auto;
    min-width: 100px;
    text-align: center;
    display: block;
`

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | Resume";
    }, [])

    return (
        <main>
            <h3>Projects</h3>
            <StyledH4>Sobriquet Name Generator</StyledH4>
            <Link to={`https://name-generator-gules.vercel.app/index.html`} target={"_blank"}>
                <StyledImg src={"/sobriquet-logo.png"} alt={"Sobriquet logo"} />
            </Link>
            <p style={{textAlign: "center"}}><a href={"https://name-generator-gules.vercel.app/index.html"} target={"_blank"}>Sobriquet</a> is a name
                generator website I'm working on to help writers and artists like myself.</p>
            <StyledH4>Other Projects</StyledH4>
            <StyledLink to="https://github.com/codyheadings?tab=repositories" target="_blank">GitHub</StyledLink>
            <StyledH4>TypeScript Calculator</StyledH4>
            <Calculator/>
        </main>
    )
}


