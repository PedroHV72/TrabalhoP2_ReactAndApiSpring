import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.tertiary};
`;

export const DivTitleCard = styled.div`
    padding-top: 75px;
    justify-content: center;
    align-items: center;
`;

export const TituloDiv = styled.h1`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 40px;
    padding-bottom: 60px;
`;

export const ContentCards = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`;