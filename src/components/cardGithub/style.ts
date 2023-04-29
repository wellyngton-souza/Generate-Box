import styled from "styled-components";

export const CardStyle = styled.div`
    width: 100vw;
    position: absolute;
    box-sizing: border-box;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #202024;
    padding: 10px 20px;

    color: #ffffff;
    font-size: 20px;

    img{
        border-radius: 50%;
        margin-right: 30px;
        width: 60px;
    }

    div{
        display: flex;
        align-items: center;
    }

    p{
        margin-left: 30px;
    }
`;