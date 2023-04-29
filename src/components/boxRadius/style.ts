import styled from "styled-components";

type border = {
    borderRadius: number[];
};

export const BoxRad = styled.div<border>`
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    padding: 10px;

    background-color: #007bff;
    border: 2px solid black;
    border-radius: 
    ${props => props.borderRadius[0]}%
    ${props => props.borderRadius[1]}%
    ${props => props.borderRadius[2]}%
    ${props => props.borderRadius[3]}%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        text-align: center;
    }

    button{
        padding: 5px 10px;
        border: 1px solid black;
    }
`;