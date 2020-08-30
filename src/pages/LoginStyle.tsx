import styled from 'styled-components';

export const LoginWrap = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    padding-bottom: 2.8rem;
`;

export const Entrar = styled.button`
    padding: 1.1rem;
    padding-right: 14rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    background: #ffd700;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    border-radius: 0.3rem;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    &:after,
    &:before {
        right: 0;
        top: 50%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: transparent;
        border-left-color: #ffd700;
        border-width: 0.8rem;
        margin-top: -0.8rem;
    }
    &:before {
        margin-right: -1px;
        border-color: transparent;
        border-left-color: #000000;
        border-width: 0.8rem;
        margin-top: -0.8rem;
    }
`;

export const Loading = styled.div`
    background-color: #ffd700;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const LoadingText = styled.span`
    color: black;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.1rem;
`;
