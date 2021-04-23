import { Button, Card } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MaterialModel } from '../../../../../models/material.model';

import './materials.scss';

/* eslint-disable-next-line */
export interface MaterialsProps {}

export function Materials(props: MaterialsProps) {
  console.log('Materials list rerendered');

  const [materials, setMaterials] = useState<MaterialModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`./public/mock/materials.json`)
      .then((response) => {
        setMaterials(response.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Card
      className="info-card"
      title="Information"
      extra={<a href="#">More</a>}
    >
      <div className="material-card-content">
        {materials.map((material, id) => (
          <div key={id} className="image-card">
            <img
              height="200px"
              width="400px"
              alt="example"
              src={material.src}
            />
            <div className="card-name">
              <span>{material.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Materials;
