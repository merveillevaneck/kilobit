import React from 'react';
import {Title} from '@kilo-lab/web-design.title';
import { TitleGraphic } from './title-graphic';

export const BasicTitleGraphic = () => {
  return (
    <TitleGraphic
      image={<img src="https://kilolab-next-template.netlify.app/earth_spin.svg" width="100px" height="100px" />}
      title="KiloLab"
      _title={{
        marginTop: "20px",
        marginLeft: "-25px",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "25px",
      }}
    />
  );
}
