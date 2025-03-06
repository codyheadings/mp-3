import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #156064ff;
    color: white;
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Cody Headings</h1>
            <p><em>Online Resume</em></p>
        </StyledHeader>
    )
}