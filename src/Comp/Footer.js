import React from 'react'
import '../CompStyle/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <div className="footer">
            <div>
                <p>
                    © Developed by <a className="mySite" target="_blank" href="https://meghalbisht.github.io/Meghal-Resume/">Meghal Bisht</a>
                </p>
            </div>
            <div className="footerLinks">
                <a target="_blank" href="https://github.com/MeghalBisht"><GitHubIcon className="links" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/meghal-bisht-777451177/"><LinkedInIcon className="links" /></a>
            </div>

        </div>
    )
}

export default Footer
