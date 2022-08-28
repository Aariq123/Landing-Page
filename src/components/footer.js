const Footer = () => {
    return ( 
        <div className="footer">

            <div className="flex-container">
                <div className="support">
                    <h3>SUPPORT</h3>
                    <div className="flex-2">
                        <button>
                            <i className="fa-solid fa-phone"></i> |
                            <p>0122154356546</p>
                        </button>
                        <button>
                            <i className="fa-solid fa-location-dot"></i> | 
                            <p>Find our stores</p>
                        </button>
                    </div>
                </div>
                <div className="about-us">
                    <h3>ABOUT US</h3>
                    <div className="flex-1">
                        <div>
                            <a>Terms</a>
                            <a>Privacy Policy</a>
                            <a>Blog</a>
                        </div>
                        <div>
                            <a>Brands</a>
                            <a>About Us</a>
                            <a>Refund</a>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    <h3>Stay Connected</h3>
                <div>
                    <a href="https://facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://youtube.com">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                </div>
            </div>


            <p>@Copyright 2022 Tech | All rights reserved</p>
        </div>
     );
}
 
export default Footer;