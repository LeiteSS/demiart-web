import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
 
export const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 790px) {
        widht: 60%;
    }

    background-color: rgba(255, 255, 255, .95);
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: ${({theme})=> theme.colors.primary};
    texte-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: 'Roboto', sans-serif;
    transition: .2s all ease-in-out;

    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
        transition: .2s all ease-in-out;
        color: ${({theme})=> theme.colors.secondary};
    }
`;

export const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: ${({theme})=> theme.colors.tertiary};
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;
