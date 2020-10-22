import React from 'react';

type WelcomeProps = {message: string};
const Welcome = ({message}: WelcomeProps) => {
  return <div>{message}</div>
}

export default Welcome;