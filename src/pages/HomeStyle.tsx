import styled from 'styled-components';

export const HomeWrap = styled.div`
    height: 100%;
    padding: 1rem;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    text-align: right;
`;

export const Logo = styled.img`
    height: 4.4rem;
`;

export const User = styled.div`
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
            display: block;
            border-radius: 0.6rem;
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
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        background: #fff;
        position: relative;
        overflow: auto;
        max-width: 90%;
        max-height: 90%;
        border-radius: 0.4rem;
        padding: 1.2rem;
        @media (min-width: 1100px) {
            max-width: 1000px;
        }
        & > div > img {
            width: 100%;
            display: block;
            border-radius: 0.6rem;
        }
        & .header {
            padding-bottom: 1.7rem;
            & > div {
                @media (max-width: 450px) {
                    display: block;
                    width: calc(100% - 1.5rem);
                }
            }
            & img {
                margin-right: 0.7rem;
                width: 3rem;
                height: auto;
                @media (max-width: 450px) {
                    margin: 0 0 0.4rem;
                }
            }
        }
        p {
            line-height: 1.4;
            font-size: 0.9rem;
            padding: 2rem 0 0.8rem;
            color: #585858;
        }
        & > span {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            font-size: 4rem;
            line-height: 0.45;
            margin: 1.5rem 0.7rem 0 0;
            font-weight: 100;
            &:before {
                content: '';
                cursor: default;
                background: rgba(66, 66, 66, 0.8);
                position: fixed;
                width: 100vw;
                height: 100vh;
                z-index: -1;
                top: 0;
                left: 0;
            }
        }
    }
`;
