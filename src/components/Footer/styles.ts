import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    width: 100%;
    height: auto;
    margin-top: 110px;
`;

export const FooterCopy = styled.div`
    border-top: 1px solid rgba(255, 255, 255, .05);
    padding: 20px 0;
    text-align: center;
`;

export const Copy = styled.span`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 11px;
    margin: 0;
`;