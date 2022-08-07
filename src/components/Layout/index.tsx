import { Navigate, Outlet } from "react-router-dom"
import authService from "../../services/authService"
import Header from "./Header"

const Layout = () => {
    if(authService.isLogged())
        return <>
            <Header/>
            <Outlet/>
        </>    
    
    return <Navigate to={'/login'} />
}

export default Layout