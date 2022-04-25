import React, {useState} from 'react';
import { Button } from './button';

export const BasicButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onClick = async () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }
  return (
    <Button loading={loading} onClick={onClick}>hello world!</Button>
  );
}
