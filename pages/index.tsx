import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Dropdown from '../components/dropdown';
import StyledLink from '../components/StyledLink';
import ButtonGroup1 from '../components/ButtonGroup1';
import ButtonGroup2 from '../components/ButtonGroup2';

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
    <div style={{ marginLeft: '50px' }}>
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
      <ButtonGroup2
        buttons={['One', 'Two', 'Three']}
        doSomethingAfterClick={printButtonLabel2}
        // defaultBackground='red'
      />
    </div>
  );
}

const Title = styled.h1`
  color: red;
  // color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;
