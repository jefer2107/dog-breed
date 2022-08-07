import {Navigate, Route, Routes} from 'react-router-dom'
import Breed from './components/Breed'
import Layout from './components/Layout'
import Login from './components/Login'

const AppRouter = () => {
    return <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route element={<Layout/>}>
            <Route path="/breeds" element={<Navigate to="/breeds/chihuahua"/>}></Route>
            <Route path="/breeds/:name" element={<Breed/>}></Route>
            <Route path="*" element={<Navigate to="/breeds"/>}></Route>
        </Route>
    </Routes>
}

export default AppRouter