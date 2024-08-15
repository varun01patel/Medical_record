import { Link } from 'react-router-dom';
import headerImage from '../Assets/doctor.7c2bc96d.png';

function Banner(){

    return <div className='banner'>
       <div className="container">
        <div className="row align-items-center">
           <div className="col-lg-7 col-md-7">
             <h5 className='backimg'>Securing Your Health Data with Blockchain Technology</h5>
             <h2>Experience the Future of Secure Medical Record Management</h2>
             <button><Link to={'/about'}>Learn More About Blockchain Security</Link></button>
           </div>

           <div className="col-lg-5 col-md-5">
              <img src={headerImage}/>
           </div>
        </div>
       </div>
    </div>
}

export default Banner ;