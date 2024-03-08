import React from 'react';
import s from './Categories.module.scss';
import { BaseContainer, BaseText } from '@base/index';

const Categories: React.FC = () => {
  return (
    <section className={s.Categories}>
      <BaseContainer className={s.Categories_Container}>
        <BaseText className={s.Categories_Title}>
          Choose an author according to his/her category
        </BaseText>

        <BaseText className={s.Categories_Description} as="p">
          We have 3 categories of authors and you can choose who to entrust your
          work to:
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default Categories;
