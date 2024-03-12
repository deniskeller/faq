import React from 'react';
import s from './Map.module.scss';
import { BaseContainer } from '@base/index';
import { MapContacts } from '@content/landing/index';

const Map: React.FC = () => {
  //КООРДИНАТЫ МАРКЕРА КАРТЫ
  const london = {
    lat: 51.52575256429945,
    lng: -0.08331416377319176,
  };

  return (
    <section className={s.Map}>
      <BaseContainer className={s.Map_Container}>
        <div className={s.Map_Map}>
          <MapContacts
            center={london}
            marker_title="86-90 Paul Street, London, England, EC2A 4NE"
          />
        </div>
      </BaseContainer>
    </section>
  );
};

export default Map;
