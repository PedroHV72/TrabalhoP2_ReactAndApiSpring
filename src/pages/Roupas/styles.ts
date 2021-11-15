import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 85px auto;

    grid-template-areas: 'HD HD', 'CT CT';
    height: 100vh;
`;

export const ContentCards = styled.h1`
    padding-top: 70px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
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
`;