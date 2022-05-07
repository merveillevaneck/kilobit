import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import {Button} from '@kilo-lab/web-design.button';
import {Title} from '@kilo-lab/web-design.title';
import {View} from '@kilo-lab/web-design.compositions';
import { IoMenuOutline, IoLogOutOutline } from 'react-icons/io5';

const Page = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * 
 * @returns this returns whatever
 */
export const BasicHeader = () => {
  return (
    <Page>
      <Header
        LeftElement={
          <IoMenuOutline
            size={30}
            style={{ cursor: 'pointer', color: 'white', marginRight: '10px'}}
            onClick={() => alert('menu clicked!')}
          />
        }
        borderRadius="5px">
        <Title color="white">
          hello world!
        </Title>
      </Header>
    </Page>
  );
}

export const RightElement = () => {
  return (
    <Page>
      <Header
        RightElement={
          <IoMenuOutline
            size={30}
            style={{ cursor: 'pointer', color: 'white', marginLeft: '10px'}}
            onClick={() => alert('menu clicked!')}
          />
        }
        borderRadius="5px">
        <Title color="white">
          hello world!
        </Title>
      </Header>
    </Page>
  )
}

export const HeaderWithTitle = () => {
  return (
    <Page>
      <Header borderRadius="10px" title={<Title color="white">hello world!</Title>} />
    </Page>
  )
}

export const CustomHeader = () => {
  return (
    <Page>
      <Header
        borderRadius="10px"
        LeftElement={
          <IoMenuOutline
            size={30}
            style={{ cursor: 'pointer', color: 'white', marginLeft: '10px'}}
            onClick={() => alert('menu clicked!')}
          />
        }
        title={<Title margin="0px" marginLeft="10px" color="white">something</Title>}
        RightElement={
          <IoLogOutOutline
            onClick={() => alert('log out clicked!')}
            size={30}
            style={{ cursor: 'pointer', color: 'white', marginLeft: '10px'}}
          />
        }
      >
        <Title color="white" margin="0px" marginLeft="10px">
          else
        </Title>
      </Header>
    </Page>
  )
}
