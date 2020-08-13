import React from 'react';
import { v4 as uuid } from 'uuid';
import ILists from '../../../../dtos/ILists';

import { Container, Header, Social, Links, LinkHolder } from './styles';
import A from '../../../../components/A';
import Facebook from './logos/Facebook';
import Instagram from './logos/Instagram';
import Twitter from './logos/Twitter';
import Linkedin from './logos/Linkedin';

const Preview = ({ social, header, links }: ILists) => {
  return (
    <Container>
      <Header>
        <img src={header.list.image} alt="" />
        <h1>{header.list.name}</h1>
      </Header>
      <Social>
        {social.list.instagram ? (
          <A href={social.list.instagram}>
            <Instagram />
          </A>
        ) : (
          ''
        )}
        {social.list.facebook ? (
          <A href={social.list.facebook}>
            <Facebook />
          </A>
        ) : (
          ''
        )}
        {social.list.twitter ? (
          <A href={social.list.twitter}>
            <Twitter />
          </A>
        ) : (
          ''
        )}
        {social.list.linkedin ? (
          <A href={social.list.linkedin}>
            <Linkedin />
          </A>
        ) : (
          ''
        )}
      </Social>
      <Links>
        {links.list.length > 0 ? (
          <LinkHolder>
            {links.list.map((each) => (
              <A href={each.url} key={uuid()}>
                {each.title}
              </A>
            ))}
          </LinkHolder>
        ) : (
          ''
        )}
      </Links>
    </Container>
  );
};

export default Preview;