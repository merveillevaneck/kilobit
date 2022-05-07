import React, {useState} from 'react';
import { Button } from './button';
import { Center } from '@kilo-lab/web-design.center';

export const BasicButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onClick = async () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }
  return (
    <Center>
      <Button boxShadow="0px 2px 2px grey" loading={loading} onClick={onClick}>hello world!</Button>
    </Center>
  );
}
