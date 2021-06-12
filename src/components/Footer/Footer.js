import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { MdCall } from 'react-icons/md'
import { SiMicrosoftoutlook } from "react-icons/si";


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <MdCall/>
          <LinkItem href='tel:+421902209257'>+421902209257</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <SiMicrosoftoutlook/>
          <LinkItem href='mailto:lukas.vilim@outlook.com'>lukas.vilim@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“An idiot with a plan can beat a genius without a plan”</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/Villiss'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/luk%C3%A1%C5%A1-vilim-a57082171/'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/lukas_vilim/'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
