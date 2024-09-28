
import "./Contact.css";
const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements.name.value);
        // Handle form submission logic here
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>If you have any questions or comments, please don&apos;t hesitate to contact me.</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" id="message" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
            
        </section>
    );
};

export default Contact;