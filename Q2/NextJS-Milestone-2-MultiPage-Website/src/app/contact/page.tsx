import "../contact.css";

export default function Contact() {
  return (
    <>
    <div className="contact-parent">
    <form className="form">
        <h2>CONTACT US</h2>
        <p >
          <input placeholder="Your Name Here"></input>
        </p>
        <p >
          <input placeholder="Your Email Here"></input>
        </p>
        <p >
          <input placeholder="Message"></input>
        </p>
        <button>Send Message</button>
      </form>
    </div>
      
    </>
  );
}
