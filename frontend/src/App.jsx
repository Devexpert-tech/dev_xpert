import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './styles/app.css'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main-container">
        <Hero />
        {/* Additional components (Cards, Lists) go here */}
      </main>
    </div>
  )
}
