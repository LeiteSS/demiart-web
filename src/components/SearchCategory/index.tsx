import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { listMaterials } from '../../services/resources/materials';
import { listDisciplines } from '../../services/resources/disciplines';
import { findDisciplineByName } from '../../services/resources/disciplines';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Category from '../../components/Category';
import { BodyContainer, Wrapper } from './styles';

interface Disciplines {
  id: number,
  disciplineName: string,
  disciplineDescription: string,
  disciplineImgUrl: string,
  disciplineCategory: string
}

const SearchCategory = (props) => {
  const [disciplines, setDisciplines] = useState<Disciplines[]>([]);

  const navigate = useNavigate();

  const filteredData = disciplines.filter((el) => {
    if (props.input === '') {
        return el;
    }
    else {
      return el.disciplineName.toLowerCase().includes(props.input)
    }
  })

  const getDisciplineByName = async () => {
    const {data} = await findDisciplineByName(props.input);
    setDisciplines(data);
  }

  const getAllDisciplines = async () => {
    const {data} = await listDisciplines();
    setDisciplines(data);
  }

  const filterItem = (curcat) => {
    const newItem = disciplines.filter((newVal) => {
        return newVal.disciplineCategory === curcat;
    });
    setDisciplines(newItem);
  };

  const menuItems = [...new Set(disciplines.map((Val) => Val.disciplineCategory))];

  useEffect(() => {
    getAllDisciplines();
    getDisciplineByName();
  }, []);

  return (
    <>
      <Wrapper>
        <BodyContainer>
            <Category
              filterItem={filterItem}
              setItem={setDisciplines}
              menuItems={menuItems}
            />
          </BodyContainer>
          <BodyContainer>
            {filteredData.map((item) => (
              <Card sx={{ maxWidth: 345, m: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.disciplineImgUrl}
                  alt="Exemplo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.disciplineName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.disciplineDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color='warning' size="small" onClick={async () => {
                    const {data} = await listMaterials(item.id);
                    navigate(`/materials/${item.id}`, {state: data})
                  }}>Learn More</Button>
                </CardActions>
              </Card>
            ))}
          </BodyContainer>
      </Wrapper> 
    </>
)
}

export default SearchCategory;