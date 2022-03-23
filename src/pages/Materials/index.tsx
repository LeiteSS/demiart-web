import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeBackground, BodyContainer, InlineContainer, InlineTitle, Greetings, StatementContainer } from './styles';

import TextField from "@mui/material/TextField";

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Type from '../../components/Type';
import { MaterialItem } from './Material';

import logo from '../../assets/images/logo-demisart.png';

interface Materials {
    material_id: number,
    material_name: string,
    material_description: string,
    material_img_url: string,
    material_download_url: string,
    material_type: string
}

const Materials = () => {
    const [materials, setMaterials] = useState<Materials[]>([]);

    const location  = useLocation();
    const { state } = location;
    
    const filterItem = (curcat) => {
        const newItem = materials.filter((newVal) => {
            return newVal.material_type === curcat;
        });

        setMaterials(newItem);
    };

    const menuItems = [...new Set(materials.map((Val) => Val.material_type))];

    const getAllMaterials = async () => {
        setMaterials(Object(state));
    }

    useEffect(() => {
        getAllMaterials();
    }, []);
    
    return(
        <HomeBackground>
            <Greetings>
                <img src={logo} alt="O logo é uma casa com três janelas" width="100px" height="80px"/> 
            </Greetings>
            <Type
                filterItem={filterItem}
                setItem={setMaterials}
                menuItems={menuItems}
            />
            <BodyContainer>
                <Card noShadow width='90%'>
                    <InlineTitle>
                        <h2 className='h2'>Materiais</h2>
                    </InlineTitle>
                    <StatementContainer>
                        {materials.map(material => <MaterialItem {...material} />)}
                    </StatementContainer>
                </Card>
            </BodyContainer>
        </HomeBackground>
    )
}

export default Materials;