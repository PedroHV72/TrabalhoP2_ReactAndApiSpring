import styled from 'styled-components';

interface ICardRoupasProps {
    background: string;
}

export const Container = styled.section<ICardRoupasProps>`
    position: relative;
    background: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    width: 350px;
    height: 350px;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-decoration: none;

    &:after {
        content: "";
        position: absolute;
        inset: 0px;
        background-image: linear-gradient(transparent, rgb(0, 0, 0));
        opacity: 0.4;
        border-radius: 12px;
        transition: all 0.3s ease-in-out 0s;
    }


    > h1 {
        text-align: center;
        color: #ffffff;
        z-index: 9999;
        font-size: 40px;
    }
`;