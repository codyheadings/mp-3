import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLiInd = styled.li`
    font-size: calc(10px + .5vw);
    margin-left: 3vw;
`

const StyledLink = styled(Link)`
    color: #156064ff
`

export default function Education() {
    return (
        <main>
            <h3>Education</h3>
            <h4>Boston University</h4>
            <p>JAN 2023 - MAY 2026<br/><br/>Bachelor of Arts in Computer Science<br/><br/>College of General Studies:
                JAN 2023 -
                MAY 2024<br/><br/>College of Arts and Sciences: MAY 2024 - MAY 2026
            </p>

            <h5>Classes (<i>Bolded items are in progress.</i>)</h5>
            <ul>
                <li>Introduction to Computer Science I & II</li>
                <li>Combinatoric Structures</li>
                <li>Linear Algebra / Geometric Algorithms</li>
                <li>Computer Systems</li>
                <li>Probability in Computing</li>
                <li>Analysis of Algorithms</li>
                <li>Software Engineering</li>
                <li><b>Web Application Development</b></li>
                <li><b>Introduction to Artificial Intelligence</b></li>
                <li><b>Introduction to Database Systems</b></li>
            </ul>

            <h5>Achievements and Accolades</h5>
            <ul>
                <li>CGS: Dean's List | Spring 2023-Spring 2024</li>
                <li>CGS: Dean's Circle | Spring 2023-Spring 2024</li>
                <li>CAS: Dean's List | Fall 2024</li>
            </ul>

            <h5>Organizations</h5>
            <ul>
                <li>BU Arts and Literary Club | Treasurer, Editor</li>
                <StyledLiInd>
                    More Information in <StyledLink to={"/leadership"}>Leadership Experience</StyledLink>
                </StyledLiInd>
            </ul>
        </main>
    )
}


