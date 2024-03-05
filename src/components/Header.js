import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="header">
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/collection" className="nav-link">
            Collection
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/inspiration" className="nav-link">
            Inspiration
          </NavLink>
        </NavItem>

        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/mycollection" className="nav-link">
                My Collection
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/klknewitem" className="nav-link">
                Add Item
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" onClick={handleClick}>
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}

        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>


            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
            </NavItem>
          </>

        )}
        
      </Nav>
    </header>
  )
}

export default Header
