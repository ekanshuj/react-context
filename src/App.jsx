import React from 'react'
import Basket from './components/Basket'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Collections from './components/Collections'
import { BasketProvider } from './context/BasketContext'

const App = () => {
  return (
    <div className="app">
      <BasketProvider>
        <Routes>
          <Route exact path="/" element={
            <>
              <Nav />
              <Collections />
            </>
          } />
          <Route path="/basket" element={
            <>
              <Nav />
              <Basket />
            </>
          } />
        </Routes>
      </BasketProvider>
    </div>
  )
}

export default App