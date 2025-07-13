import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Hook personalizado y proveedor juntos
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);

  const login = (name, email) => {
    setIsAuthenticated(true);
    setUserName(name);
    setEmail(email)
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName(null);
    setEmail(null)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);