import React from 'react';

export default function Navbar(): JSX.Element {
  const activeLink = (href: string) => {
    const currentPath = window.location.pathname;
    return currentPath === href ? 'nav-link active' : 'nav-link';
  };

  return (
    <>
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <a className={activeLink('/')} href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className={activeLink('/login')} href="/login">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className={activeLink('/register')} href="/register">Sign up</a>
                </li>
                </ul>
            </div>
            </nav>
            <div className="banner">
            <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
            </div>
        </div>
    </>
    
  );
};