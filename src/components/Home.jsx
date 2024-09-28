import  "./Home.css";   
const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1>Hello, I&apos;m Abu Bakar</h1>
                <p>I&apos;m a Full Stack JavaScript Developer</p>
                <a href="#projects" className="home-btn">View My Projects</a>
            </div>
        </section>
    );
};

export default Home;