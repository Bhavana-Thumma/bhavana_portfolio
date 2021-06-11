import React from 'react'

/**
* @author
* @function Header
**/

const Header = (props) => {

  return(
    <div>
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo" class="navbar-brand">Bhavana Thumma</a>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active navbar-brand">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link navbar-brand">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link navbar-brand">Skills</a></li>
                        <li class="nav__item"><a href="#work" class="nav__link navbar-brand">Work</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link navbar-brand">Contact</a></li>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    </div>
   )

 }

export default Header;