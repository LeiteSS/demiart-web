import { useState } from 'react';
import Menu from  '../../components/Menu';

const Projects = () => {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }


    return(
        <>
            { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
            <h1>Projects</h1>
        </>
    )
}

export default Projects;