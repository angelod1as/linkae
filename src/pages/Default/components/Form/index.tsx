import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import ILists from '../../../../dtos/ILists';

import Header from './Header';
import Social from './Social';
import Links from './Links';
import Color from './Color';

const Styled = styled.div`
  margin: 40px 0;
`;

const Form = ({ social, header, links, color }: ILists) => {
  const { t } = useTranslation();
  return (
    <Styled>
      <h2>{t('Form header title')}</h2>
      <Header list={header.list} hook={header.hook} />
      <Social list={social.list} hook={social.hook} />
      <Color list={color.list} hook={color.hook} />
      <Links list={links.list} hook={links.hook} />
    </Styled>
  );
};

export default Form;
