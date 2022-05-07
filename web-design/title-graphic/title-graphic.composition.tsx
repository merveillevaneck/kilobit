import React from 'react';
import { TitleGraphic } from './title-graphic';
import { Center } from '@kilo-lab/web-design.center';

export const BasicTitleGraphic = () => {
  return (
    <Center width="100%">
      <TitleGraphic
        image={<img src="https://kilolab-next-template.netlify.app/earth_spin.svg" width="125px" height="125px" />}
        title="Supporting Massive Ideas"
        _title={{
          margin: "0px",
          marginTop: "20px",
          marginLeft: "-25px",
          color: "rgba(124, 76, 219, 0.8)",
          fontSize: "15px",
          maxWidth: "70px",
          fontWeight: 'normal',
          textShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)'
        }}
      />
    </Center>
  );
}
