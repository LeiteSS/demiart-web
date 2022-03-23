import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 60px;
    color: ${({theme}) => theme.colors.background};
    background: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    &:hover {
        filter: opacity(0.8)
    }
    &:disabled {
        filter: opacity(0.4)
    }
`