import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer"><br/>
        <div className="container">
            <div className="row footer-content">
                <div className="col col-sm-4 mt-3">
                    <h2>Orthodoxy in Ethiopia </h2>
                    <p> Ethiopia has the world's second-largest Orthodox population – approximately 46 million people — and a Christian history that dates to the fourth century. </p>
                </div>
                <div className="col col-sm-3 mt-3">
                    <h2>Contact</h2>
                    <h8> 
                    505 Coyote Rd, San Jose, CA 95111
                    </h8> <br/>
                    <a role="button" className="btn btn-link" target="_blank" style={{color:"white"}} href="+251958134490"><i className="fa fa-phone" /> (408) 365-8905</a> <br/>
                    
                </div>  
                <div className="col col-sm-3 mt-3">
                    <h2>Location</h2>
                    <a role="button" className="btn btn-link" target="_blank" style={{color:"white"}} href="505 Coyote Rd, San Jose, CA 95111"><i className="fa fa-map-marker"/> Rama Gabriel Church</a> <br/>
                    <a role="button" className="btn btn-link" target="_blank" style={{color:"white"}} href="587 N 6th St, San Jose, CA 95112"><i className="fa fa-map-marker"/> Dykk Gabriel</a>
                </div>
            </div>
            <div className="row footer-content mt-5">
                <div className="col-lg-6 solcial-footer mt-3 ">
                    <a className="https://kidusgebriel.org/" href="http://instagram.com/"><i className="fa fa-website" /></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" target="_blank" href="https://www.facebook.com/kidusgebriel.org/"><i className="fa fa-facebook" /></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" target="_blank" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    <a className="https://www.youtube.com/channel/UC81BIGbBNDOfe4GDwDV8wug" target="_blank" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                </div>
                <div class="col-lg-5 mt-2"><hr/>
                    <a role="button" target="_blank"  href="https://github.com/ttewabe" style={{color:"white"}}><i className="fa fa-copyright fa-md" /><i>2020 | Designed & coded with 💙 by Tewabe T</i></a>
                </div>
            </div>
        </div>
    </footer>
);
}
export default Footer;