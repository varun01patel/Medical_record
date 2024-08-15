import React, { useState } from 'react';
import MobileImg from '../Assets/mobile.f82d7322.png';
import WomanImg from '../Assets/women.eb5c49c5.png';

function Account() {
    const [submitted, setSubmitted] = useState(false); // State to handle submission status

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from being submitted to the server
        setSubmitted(true); // Set submitted to true to show success message
        setTimeout(() => setSubmitted(false), 5000); // Optional: Hide message after 5 seconds
    };

    return (
        <div>
            <style>
                {`
                .success-message {
                    color: #28a745; /* Green color */
                    background-color: #dff0d8; /* Light green background */
                    border-color: #d4edda; /* Green border */
                    padding: 10px;
                    margin-top: 10px;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 16px;
                }
                `}
            </style>
            <section className="section-area account-wrapper1">
                <div className="container-fluid">
                    <div className="appointment-inner section-sp2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="appointment-form form-wrapper">
                                        <h3>Need Help?</h3>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Age" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" className="form-control" placeholder="Mobile Number" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Explain your problem" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                                            {submitted && <div className="success-message">Your message has been sent successfully!</div>}
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="appointment-thumb">
                                        <img src={MobileImg} alt="Help and Support" />
                                        <div className='images-group'>
                                            <img className='img1' src={WomanImg} alt="Support" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Account;
