import memback from '../Assets/download666.png';
import member1 from '../Assets/doc11.jpg';
import member2 from '../Assets/doc22.jpg';
import member3 from '../Assets/doc33.jpg';
import member4 from '../Assets/doc44.jpg';
import member5 from '../Assets/doc55.jpg';
import member6 from '../Assets/doc66.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Testimonial(){
    return <div>
      <section className="section-area section-sp3 testimonial-wraper">
         <div className="container">
            <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">Trusted by Patients Worldwide</h6>
                <h2 className="title mb-0">
                Hear directly from our users
                   <br/>
                   who trust us to protect their most sensitive health information
                </h2>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <div className="thumb-wraper">
                        <img src={memback} className='bg-img'/>
                        <ul>
                          <li data-member="1">
                            <a href='/'>
                                <img src={member1}/>
                            </a>
                          </li>
                          <li data-member="2">
                            <a href='/'>
                                <img src={member2}/>
                            </a>
                          </li>
                          <li data-member="3">
                            <a href='/'>
                                <img src={member3}/>
                            </a>
                          </li>
                          <li data-member="4">
                            <a href='/'>
                                <img src={member4}/>
                            </a>
                          </li>
                          <li data-member="5">
                            <a href='/'>
                                <img src={member5}/>
                            </a>
                          </li>
                          <li data-member="6">
                            <a href='/'>
                                <img src={member6}/>
                            </a>
                          </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='testimonial-bx'>
                        <div className='testimonial-content'>
                            <p>MediChain transformed how I think about my medical records. Knowing that my data is secure makes me feel safe
                            </p>
                        </div>
                        <div className='client-info'>
                            <h5 className='name'>John Deo</h5>
                            <p>Patient</p>
                        </div>
                        <div className='quote-icon'>
                            <FaQuoteLeft/>
                        </div>
                        <div className='quote-icon2'>
                            <FaQuoteRight/>
                        </div>

                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
}

export default Testimonial;