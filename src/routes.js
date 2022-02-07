import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/home'
import Links from '../src/pages/links'
import Error from './pages/error'

function RouterApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Links/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;