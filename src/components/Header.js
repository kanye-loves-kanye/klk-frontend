import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ userProfile }) => {
  const navigate = useNavigate()

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

        {userProfile && (
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

          </>
        )}

        {!userProfile && (
          <>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
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
