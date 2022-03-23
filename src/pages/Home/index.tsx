import { useState } from 'react';

import { HomeBackground, BodyContainer, Greetings, Search } from './styles';

import TextField from "@mui/material/TextField";

import SearchCategory from '../../components/SearchCategory';

import logo from '../../assets/images/logo-demisart.png';


const Home = () => {
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();

        setInputText(lowerCase);
    };
    return(
        <HomeBackground>
            <Greetings>
                <img src={logo} alt="O logo é uma casa com três janelas" width="100px" height="80px"/>
            </Greetings>
            <Search>
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    color='warning'
                    fullWidth
                    label="Search"
                />
            </Search>
            <BodyContainer>
                <SearchCategory input={inputText} />
            </BodyContainer>
        </HomeBackground>
    )
}

export default Home;