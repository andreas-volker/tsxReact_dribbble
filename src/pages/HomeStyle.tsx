import styled from 'styled-components';

export const HomeWrap = styled.div`
    height: 100%;
    padding: 1rem;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 4.4rem;
`;

export const User = styled.div`
    text-align: right;
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
        align-self: flex-end;
        margin: 0 0 0.4rem;
    }
`;

export const Gallery = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3rem 0;
    width: calc(100% + 1rem);
    & > li {
        padding: 0 1rem 1rem 0;
        & > img {
            width: 100%;
            cursor: pointer;
        }
    }
    & > li {
        @media (min-width: 1400px) {
            width: 25%;
        }
        @media (max-width: 1399px) {
            width: 33.33%;
        }
        @media (max-width: 1050px) {
            width: 50%;
        }
        @media (max-width: 720px) {
            width: 100%;
        }
    }
`;

export const Modal = styled.div`
    display: block;
`;
