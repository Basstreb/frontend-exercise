import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Planets from './pages/Planets/Planets';
import Starships from './pages/Starships/Starships';
import People from './pages/People/People';
import Vehicles from './pages/Vehicles/Vehicles';
import AppLayout from './components/Layout/AppLayout';
import './App.scss';

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AppLayout />}>
                        <Route index element={<Planets />} />
                        <Route path='/starships' element={<Starships />} />
                        <Route path='/people' element={<People />} />
                        <Route path='/vehicles' element={<Vehicles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
