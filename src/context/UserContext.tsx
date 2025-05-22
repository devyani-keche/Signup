import React, { createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';

export interface UserData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  isAgency: boolean;
  profileImage?: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true,
    profileImage: undefined
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{
      userData,
      updateUserData,
      isLoggedIn,
      setIsLoggedIn
    }}>
      {children}
    </UserContext.Provider>
  );
};