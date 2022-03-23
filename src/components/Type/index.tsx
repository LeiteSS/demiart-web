import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Wrapper } from './styles';

interface Materials {
  material_id: number,
  material_name: string,
  material_description: string,
  material_img_url: string,
  material_download_url: string,
  material_type: string
}

const Type = ({ filterItem, setItem, menuItems }) => {
  const [materials, setMaterials] = useState<Materials[]>([]);

  const location  = useLocation();
  const { state } = location;

  const getAllMaterials = async () => {
    setMaterials(Object(state));
  }

  useEffect(() => {
    getAllMaterials();
  }, []);

  return (
    <>
      <Wrapper>
        {menuItems.map((Val, id) => {
          return (
            <Button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </Button>
          );
        })}
        <Button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={getAllMaterials}
        >
          All
        </Button>
      </Wrapper>
    </>
  );
};

export default Type;