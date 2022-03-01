import React from "react"
import "./ContactBoxContainer.css"
const ContactBoxContainer = () => {
    return (
        // TODO:contact boxes
        <div className="contact-box-container text-center">
            <div className="row contact-box-row text-center">
                {/* TODO:Dummy Column for alignment- Bootstrap */}
                <div className="col-md-1"></div>

                {/* TODO:Email */}
                <div className=" col-xs-10 col-md-5 contact-quick-email-container text-center">
                    <div className="contact-quick-email text-center">
                        <h1 className="quick-contact-head">Email</h1>
                        <a href="mailto:manishkumar_24@outlook.com" className="quick-contact-detail" style={{color:"rgba(255, 255, 255, 0.74)"}}>
                            manishkumar_24@outlook.com
                        </a>
                    </div>
                </div>

                {/* TODO:Phone */}
                <div className="col-xs-10 col-md-5 contact-quick-phone-container text-center">
                    <div className="contact-quick-phone text-center">
                        <h1 className="quick-contact-head">Phone</h1>
                        <a href="tel:+919123557850" className="quick-contact-detail">
                            +91 9123557850
                        </a>
                    </div>
                </div>

                {/* TODO:Dummy Column for alignment- Bootstrap */}
                <div className="col-md-1"></div>

            </div>
        </div>
    )
}

export default ContactBoxContainer;