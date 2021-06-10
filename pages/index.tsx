import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Dropdown from '../components/dropdown';
import StyledLink from '../components/StyledLink';
import ButtonGroup1 from '../components/ButtonGroup1';
import ButtonGroup2 from '../components/ButtonGroup2';
import React from 'react';

export default function Home() {
  const pid = 1;
  const printButtonLabel1 = (buttonLabel: string) => {
    console.log('buttonLabel1=', buttonLabel);
    //do some stuff here
  };
  const printButtonLabel2 = (buttonLabel: string) => {
    console.log('buttonLabel2=', buttonLabel);
    //do some stuff here
  };

  return (
    <HomeWrapper>
      <div className='browser-size'>
        <div className='mobile'>MobileView</div>
      </div>

      {/*<StyledLink href="/post/[pid]" forwardedAs="/post/abc">*/}
      <StyledLink href='/post/[pid]' forwardedAs={`/post/${pid}`}>
        First post
      </StyledLink>
      <Title>My page test</Title>
      {/*<Dropdown />*/}

      <ButtonGroup1
        buttons={['One', 'Two', 'Three']}
        doSomethingAfterClick={printButtonLabel1}
        // defaultBackground='red'
      />
      <br />
      <br />
      {/*
      <ButtonGroup2
        buttons={['One', 'Two', 'Three']}
        doSomethingAfterClick={printButtonLabel2}
        // defaultBackground='red'
      />*/}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  margin-left: 50px;

  @media screen and (min-width: 0px) and (max-width: 400px) {
    .browser-size {
      display: block;
    } /* show it on smaller screen */
  }
  @media screen and (min-width: 401px) and (max-width: 1024px) {
    .browser-size {
      display: none;
    } /* hide it on larger screens */
  }
`;

const Title = styled.h1`
  color: red;
  // color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;
