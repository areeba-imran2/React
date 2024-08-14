import React from 'react';

export function  ternaryOperators({ isSignIn }) {
  return (
    <div>
      {isSignIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

export default ternaryOperators;
