import React from 'react';
import styled from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';

import Language from './Language';

const Styled = styled.div`
  margin: 0 0 40px 0;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const Explanation = styled.div``;

const Header = ({ lang }: { lang: string }) => {
  const { t } = useTranslation();
  return (
    <Styled>
      <Title>
        <h1>{t('Create your link list')}</h1>
        <Language lang={lang} />
      </Title>
      <Explanation>
        <h2>{t('How to use')}</h2>
        <Trans i18nKey="How to use explanation">
          <p>
            <b>Text:</b>text
          </p>
        </Trans>
      </Explanation>
    </Styled>
  );
};

export default Header;
