import { enqueueSnackbar } from "notistack";
import { createContext,useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children}) =>{

    const navigate =useNavigate();

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
     );

     const [LoggedIn, setLoggedIn] = useState(currentUser!==null);
     const logout =()=>{
        sessionStorage.removeItem('user');
        navigate('/login');
        enqueueSnackbar('Logged out Successfully', {variant: 'success'});
        setLoggedIn(false);
     }
   
    return <AppContext.Provider value={ {currentUser,setcurrentUser,LoggedIn,setLoggedIn,logout}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext (AppContext);

export default useAppContext;