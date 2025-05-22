import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <div >
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
