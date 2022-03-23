import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StatementItemContainer, StatementItemImage, StatementItemInfo } from './styles';

import Button from '../../../components/Button';


interface Materials {
  material_id: number,
  material_name: string,
  material_description: string,
  material_img_url: string,
  material_download_url: string
}

export const MaterialItem = ({material_name, material_description, material_img_url, material_download_url}: Materials) => {


  return (
    <StatementItemContainer>
      <StatementItemImage>
        <Button type="button">
          {material_img_url}
        </Button>
      </StatementItemImage>
      <StatementItemInfo>
        <p className='primary-color'>
          <strong>Nome: </strong> {material_name}
        </p>
        <p className=''>
          <strong>Url: </strong> {material_download_url}
        </p>
        <p className=''>
        <strong>Descrição: </strong> {material_description}
        </p>
        <br />
      </StatementItemInfo>
    </StatementItemContainer>
  )
}