import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <img src="/assets/logo.svg" alt="天空隊長" className="brand-logo" />
        </a>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Docs</a>
        </nav>
      </div>
    </header>
  )
}
