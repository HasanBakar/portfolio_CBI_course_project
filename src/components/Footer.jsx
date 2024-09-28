import "./Footer.css";
const Footer = () => {
    return (
        <section className="footer-section">
        <div className="footer-container">
            <div className="footer-info">
                <h3>My Portfolio</h3>
                <p>Full Stack Developer</p>
                <p>&copy; {`${new Date().getDate()}/ ${new Date().getMonth() + 1} /${new Date().getFullYear()}`} My Portfolio. All rights reserved.</p>
            </div>
            <ul className="footer-socials">
                <li><a href="your_github_link"  target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="your_linkedin_link" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li><a href="your_twitter_link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
            
        </section>
    );
};

export default Footer;