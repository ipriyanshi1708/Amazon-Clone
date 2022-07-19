import React from 'react'
import amazon_logo from "../amazon_logo.png";
import { CssBaseline, AppBar, Toolbar, Box } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import "./Header.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <nav className="header">
        <CssBaseline />
        <AppBar position="relative" style={{ background: '#131921' }}>
          <Toolbar>
            <Box
            className='logo'
              component="img"
              sx={{
                height: 50,
                width: 100,
              }}
              alt="Your logo."
              src={amazon_logo}
            />
            <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header__options'>
            <Link to="/signup">
            <div className="header__option">
            <div className="header__optionLineOne">Hello, New User</div>
            <div className="header__optionLineTwo">SignUp</div>
            </div>
            </Link>
            <div className="header__option">
              <div className="header__optionLineOne">Returns</div>
              <div className="header__optionLineTwo">& Orders</div>
            </div>
            <div className="header__option">
              <div className="header__optionLineOne">Your</div>
              <div className="header__optionLineTwo">Prime</div>
            </div>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
            </div>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    </>
  )
}

export default Navbar
