import { useContext, createContext, useState,} from "react";
import API from "../api/axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  
  const loginUser = async(email, password) =>{
    try {
      
      const res = await API.post('/auth/login', {
            email,
            password
      });
      
      if(res.data.user){
        setUser(res.data.user);
        setIsAuthenticated(true);
        
         navigate("/dashboard"); 
      }
      
    } catch (error) {
      console.log("Error", error);
    }
    
  }
  


  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated, loginUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
