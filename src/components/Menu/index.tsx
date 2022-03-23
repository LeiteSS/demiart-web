import { StyledMenu, StyledLink, CloseToggle } from './styles';


const Menu = ({ handleNavToggle }) => {
    return(
        <StyledMenu>
            <StyledLink className="animate__animated animate__fadeInRight" to="/">Home</StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight" to="/articles">Articles</StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight" to="/projects">Projects</StyledLink>
            <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle} />
        </StyledMenu>
    )
}

export default Menu;