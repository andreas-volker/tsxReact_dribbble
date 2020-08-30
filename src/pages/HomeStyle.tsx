import styled from 'styled-components';

export const HomeWrap = styled.div`
    height: 100%;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const Logo = styled.img`
    height: 4.4rem;
`;

export const User = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    @media (max-width: 450px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const Avatar = styled.img`
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    height: 4.4rem;
    margin-left: 0.4rem;
    @media (max-width: 450px) {
        align-self: center;
        margin: 0;
    }
`;
