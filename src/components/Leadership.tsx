import styled from "styled-components";

const StyledImg = styled.img`
    margin: 3vh;
    width: 20%;
    height: auto;
    border-radius: 50%;
    min-width: 150px;
`

export default function Leadership() {
    return (
        <main>
            <h3>Leadership Experience</h3>
            <h4>BU Arts and Literary Club</h4>
            <StyledImg src="src/assets/alc-logo.png" alt="Logo for BU Arts and Literary Club"/>
            <p>Member Since Fall 2023
                <br/><br/>
                Treasurer: MAR 2024 - PRESENT
                <br/><br/>
                Magazine Editor: SEPT 2024 - PRESENT
            </p>
            <h5>Responsibilities:</h5>
            <ul>
                <li>Complete Funding Requests for the Student Activities Office</li>
                <li>Host and plan meetings/events for the community</li>
                <li>Work alongside the rest of the E-Board to constantly improve the club</li>
            </ul>
        </main>
    )
}


