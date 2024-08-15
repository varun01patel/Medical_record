import React from 'react';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Assets/download.png';  // Make sure this logo is appropriate for your project

function Footer() {
    return <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="widget widget-info">
                            <div className="footer-logo">
                               <Link to={'/'}>
                                <img src={logo} alt="Medical Record Management System Logo"/>
                               </Link>
                            </div>
                            <div className='ft-contact'>
                                <p>Securing and streamlining access to medical records using advanced blockchain technology.</p>
                                   <div className='contact-bx'>
                                    <div className='icon'>
                                        <FaPhoneAlt/>
                                    </div>
                                    <div className='contact-number'>
                                        <span>Contact Us</span>
                                        <h4 className='number'>+01 234 567 8901</h4>
                                    </div>
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className='widget footer-widget ml-50'>
                            <h3 className='footer-title'>Quick Links</h3>
                            <ul>
                                <li>
                                    <Link to={'/about'}>
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/how-it-works'}>
                                        <span>How It Works</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/privacy-policy'}>
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/terms'}>
                                        <span>Terms of Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/faq'}>
                                        <span>FAQs</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className='widget footer-widget ml-50'>
                            <h3 className='footer-title'>Our Features</h3>
                            <ul>
                                <li>
                                    <Link to={'/feature/security'}>
                                        <span>Enhanced Security</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/feature/accessibility'}>
                                        <span>Easy Accessibility</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/feature/integration'}>
                                        <span>System Integration</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/feature/records'}>
                                        <span>Real-Time Records</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/feature/data-protection'}>
                                        <span>Data Protection</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <div className='widget widget-form'>
                            <h3 className='footer-title'>Subscribe for Updates</h3>
                            <form className='subscribe-form subscription-form mb-30'>
                                <div className='ajax-message'></div>
                                <div className='input-group'>
                                    <input name='email' required className='form-control' placeholder='Your Email Address' type='email'></input>
                                </div>
                                <button name='submit' value='Submit' type='submit' className='btn btn-secondary shadow w-100'>Subscribe Now</button>
                            </form>
                            <div className='footer-social-link'>
                                <ul>
                                    <li>
                                        <Link to={'facebook.com'}>
                                          <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'twitter.com'}>
                                          <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'instagram.com'}>
                                          <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'linkedin.com'}>
                                          <FaLinkedin/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='container'>
            <div className='footer-bottom'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p className='copyright-text'>
                           Copyright © 2024 Designed & Developed by 
                           <Link to={'/home'} className='text-secondary'> Varun & Varsha</Link>
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </footer>
    </div>
}

export default Footer;
