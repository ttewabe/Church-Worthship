import React, { Fragment } from 'react';

function Footer(props) {
    return (
        <Fragment>
        <div className="container ">
            <div className="row">
                <div className=" col-sm-6 site-footer">
                    <h2>Contact</h2>
                    <ul>
                    <li><a role="button"  target="_blank" style={{color:"white"}} href="+251958134490"><i className="fa fa-phone" /> (408) 365-8905</a></li>
                    <li>
                    <a role="button" target="_blank" style={{color:"white"}} href="https://kidusgebriel.org"><i className="fa fa-map-marker"/> Rama Gabriel Church</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
        </Fragment>
    );
}
export default Footer;