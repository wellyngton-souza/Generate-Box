import styled from "styled-components";

type border = {
    borderRadius: number[];
};

export const BoxRad = styled.div<border>`
    width: 400px;
    height: 400px;
    background-color: cyan;
    border: 2px solid black;
    border-radius: 
    ${props => props.borderRadius[0]}%
    ${props => props.borderRadius[1]}%
    ${props => props.borderRadius[2]}%
    ${props => props.borderRadius[3]}%;
    display: flex;
    align-items: center;
    justify-content: center;
`;