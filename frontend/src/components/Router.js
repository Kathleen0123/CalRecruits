import Header from './Header'
import Home from '../pages/Home'
import AddClub from '../pages/AddClub'
import ClubDetails from '../pages/ClubDetails'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Router() {
    const Layout = () => {
        return (
            <>
            <Header />
            <div className="content"><Outlet /></div>
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="addclub" element={<AddClub />} />
                    <Route path="club" element={<ClubDetails />} />
                    <Route path="club/:id" element={<ClubDetails />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}