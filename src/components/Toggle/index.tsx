import { StyledToggle } from './styles';

const Toggle = ({handleNavToggle}) => {
    return(
        <>
            <StyledToggle className="animate__animated animate__fadeInLeft" onClick={handleNavToggle} />
        </>
    )
}

export default Toggle;