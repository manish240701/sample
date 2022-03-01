import React from "react";
import ContactBoxContainer from "./Components/ContactBoxContainer";
import "./Contact.css";

const Contact = () => {
    return (
        // TODO: Contact outer Container
        <div className="contact-outer-container text-center contact" id="contact">
            {/* TODO: Contact forms */}
            <div className="contact-form-container text-center">
                <form>
                    <input type="text" className="form-control" name="fulname" placeholder="fullname" id="fullname"  />
                    <input type="email" className="form-control" name="email" placeholder="email" id="email"  />
                    <textarea className="form-control textarea" name="message" id="message" cols="30" rows="5" placeholder="Type something"></textarea>
                    <input type="submit" className="form-control submit" value="send" />
                </form>
            </div>

            {/* TODO: Quick Contacts */}

            <ContactBoxContainer/>
        </div>
    )
}

export default Contact;