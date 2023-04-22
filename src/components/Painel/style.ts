import styled from "styled-components";

export const PainelBox = styled.article`
    box-sizing: border-box;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    flex-wrap: wrap;

    input[type="range"]{
        width: 300px;
    }
`;