import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const StyledToggle = styled(FaBars)`
    position: fixed;
    top: 5%;
    right: 4%;
    color: ${({theme})=> theme.colors.primary};
    background: #eee;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;