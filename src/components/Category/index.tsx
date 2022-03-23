import { useEffect, useState } from 'react'

import { listDisciplines } from '../../services/resources/disciplines'

import React from "react";
import { Wrapper, Button } from './styles';

interface Disciplines {
  id: number,
  disciplineName: string,
  disciplineDescription: string,
  disciplineImgUrl: string,
  disciplineCategory: string
}

const Category = ({ filterItem, setItem, menuItems }) => {
  const [disciplines, setDisciplines] = useState<Disciplines[]>([]);

  const getAllDisciplines = async () => {
    const {data} = await listDisciplines();
    console.log(data);
    setItem(data);
  }

  useEffect(() => {
    getAllDisciplines();
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
          onClick={getAllDisciplines}
        >
          All
        </Button>
      </Wrapper>
    </>
  );
};

export default Category;