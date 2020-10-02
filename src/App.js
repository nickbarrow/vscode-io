import React from 'react';
import Routes from './components/Routes';
import UserProvider from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
export default App;
