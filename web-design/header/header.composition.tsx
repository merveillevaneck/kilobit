import React from 'react';
import { Header } from './header';
import styled from 'styled-components';
import {Button} from '@kilo-lab/web-design.button';

const Page = styled.div`
  width: 100%;
  height: 150px;
  min-width: 250px;
  margin: 0px 5px 0px 0px;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  margin: 0px 10px;
`;

/**
 * 
 * @returns this returns whatever
 */
export const BasicHeader = () => {
  return (
    <Page>
      <Header>
        <Title>
          hello world!
        </Title>
      </Header>
    </Page>
  );
}

export const LeftElement = () => {
  return (
    <Page>
      <Header LeftElement={<Button onClick={() => alert('clicked')}>menu</Button>}>
        <Title>
          hello world!
        </Title>
      </Header>
    </Page>
  )
}

export const RightElement = () => {
  return (
    <Page>
      <Header RightElement={<Button onClick={() => alert('clicked')}>menu</Button>}>
        <Title>
          hello world!
        </Title>
      </Header>
    </Page>
  )
}

export const HeaderWithTitle = () => {
  return (
    <Page>
      <Header title={<Title>hello world!</Title>} />
    </Page>
  )
}

export const CustomHeader = () => {
  return (
    <Page>
      <Header
        LeftElement={<Button onClick={() => alert('left clicked')}>left</Button>}
        title={<Title>something</Title>}
        RightElement={<Button onClick={() => alert('right clicked')}>right</Button>}
      >
        <Title>
          else
        </Title>
      </Header>
    </Page>
  )
}
