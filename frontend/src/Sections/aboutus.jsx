import abouti1 from '../Assets/pic-1.ad1ed7ee.jpg';
import abouti2 from '../Assets/pic-2.0593bc2f.jpg';
import abouti3 from '../Assets/pic-3.fa689b10.jpg';
import { FaAmbulance , FaBed , FaSyringe } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AboutUs(){

  return <div>
    <section className="section about-area">
       <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="about-images">
              <ul>
                <li>
                  <img className='img1' src={abouti1}/>
                </li>
                <li>
                  <img className='img2' src={abouti2}/>
                </li>
                <li>
                  <img className='img3' src={abouti3}/>
                </li>
                <li>
                  <div className='exp-bx'>
                    20
                    <span>Year Experience</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 mb-30'>
            <div className='heading-bx'>
              <h6>About Us</h6>
              <h2 className='title'>Revolutionizing Medical Record Management</h2>
              <p>At MediChain, we leverage cutting-edge blockchain technology to enhance the security, privacy, and accessibility of medical records. Our platform ensures that your health data is safe, up-to-date, and readily available to authorized personnel only, making healthcare safer and more efficient</p>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaAmbulance/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Emergency Help</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaBed/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Qualified Doctors</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <IoWater/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Best Professionals</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaSyringe/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Medical Treatment</h4>
                  </div>
                </div>
              </div>
            </div>
            <div  className='btn btn-primary shadow'>Read More</div>
          </div>
        </div>
       </div>
    </section>
  </div>
}

export default AboutUs;