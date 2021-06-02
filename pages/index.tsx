import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Dropdown from '../components/dropdown';
import StyledLink from '../components/StyledLink';

export default function Home() {
  const pid = 1;
  return (
    <>
      {/*<StyledLink href="/post/[pid]" forwardedAs="/post/abc">*/}
      <StyledLink href='/post/[pid]' forwardedAs={`/post/${pid}`}>
        First post
      </StyledLink>
      <Title>My page test</Title>
      <Dropdown />
    </>
  );
}

const Title = styled.h1`
  //color: red;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;
