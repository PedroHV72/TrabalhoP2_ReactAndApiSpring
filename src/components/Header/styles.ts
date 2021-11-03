import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 2px solid ${props => props.theme.colors.gray};
`;

export const LogoImg = styled.img`
    height: 55px;
    width: 280px;
`;

export const Titulo = styled.h1`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 20px;
`;