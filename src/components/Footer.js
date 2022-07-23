import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer fixed-bottom">
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
                    <a className="https://kidusgebriel.org/" href="http://instagram.com/"><i className="fa fa-website" /></a>{' '}
                </div>
            </div>
            <div className="row footer-content mt-5">
                <div class="col-lg-5 mt-2"><hr/>
                    <a role="button" target="_blank"  href="https://github.com/ttewabe" style={{color:"white"}}><i className="fa fa-copyright fa-md" /><i>2020 | Designed & coded with 💙 by Tewabe T</i></a>
                </div>
            </div>
        </div>
    </footer>
);
}
export default Footer;