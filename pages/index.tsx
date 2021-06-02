import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

export default function Home() {
  return (
      <Title>My page test</Title>
  )
}

const Title = styled.h1`
  //color: red;
  color: ${({theme}) => theme.colors.primary};
  font-size: 50px;
`