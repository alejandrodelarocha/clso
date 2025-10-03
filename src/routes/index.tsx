import { Route, Routes } from 'react-router';
import Home from '../views/Home';

const routes = [
    <Routes key="Main">
        <Route key="Home" index element={<Home />} />
    </Routes>
];

export default routes;