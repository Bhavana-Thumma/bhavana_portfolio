import React from 'react'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div>
        <footer class="footer">
            <p class="footer__title">Made with <i class='bx bx-heart-circle' ></i> by Bhavana</p>
            <div class="footer__social">
                <a target="blank" href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a target="blank" href="https://www.instagram.com/bhavanathumma/" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a target="blank" href="https://twitter.com/BhavanaThumma" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
    </div>
   )

 }

export default Footer;

