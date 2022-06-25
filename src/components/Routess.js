import React from 'react'
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import { Results } from './Results'
export const Routess = () => {
  const navigate = useNavigate()
  return (
    <div>
            <Routes>
              <Route path="/">
                navigate('/search')
              </Route>
              <Route path='/search' element={<Results/>}/>
              <Route path='/image' element={<Results/>}/>
              <Route path='/video' element={<Results/>}/>
              <Route path='/news' element={<Results/>}/>
            </Routes>
    </div>
  )
}
