import { FaAmbulance , FaSyringe , FaStethoscope , FaBriefcaseMedical  } from "react-icons/fa";
import { TbMedicineSyrup } from "react-icons/tb";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            infinite: true
            }
        }, {
            breakpoint: 600,

            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              dots: false
            }
          }, {
            breakpoint: 300,
        
            settings: "unslick",
          }]
        
};


function Services(){

    return <div>
        <section className='section-area section-sp1 service-wraper'>
            <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-xl-4 col-lg-7 mb-30 bhover'>
                <div className='heading-bx'>
                    <h6 className='title-ext'>Our Blockchain Services</h6>
                    <h2 className='title'>We Cover A Big Variety Of Medical Services</h2>
                    <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                </div>
                <Link to={''} className='btn btn-secondary btn-lg shadow'>All Services</Link>
            </div>
            <Slider className='col-xl-8 col-md-12 mb-15' {...settings}>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaBriefcaseMedical/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Decentralized Storage</h3>
                        <p>Store your medical records on a decentralized network that ensures data integrity and security against breaches</p>
                        <Link className='btn btn-primary light' to={''}>View More</Link>
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaSyringe/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Real-Time Access</h3>
                        <p>Gain real-time access to patient histories and medical data without compromising on privacy or security</p>
                        <Link className='btn btn-primary light' to={''}>View More</Link>
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaAmbulance/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Data Encryption</h3>
                        <p>Advanced encryption techniques protect sensitive health information, maintaining patient confidentiality at all times.</p>
                        <Link className='btn btn-primary light' to={''}>View More</Link>
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaStethoscope/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Diagnostics</h3>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <Link className='btn btn-primary light' to={''}>View More</Link>
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <TbMedicineSyrup/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Treatment</h3>
                        <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
                        <Link className='btn btn-primary light' to={''}>View More</Link>
                    </div>
                </div>
            </Slider>
          </div>
          </div>
        </section>
    </div>
}

export default Services;