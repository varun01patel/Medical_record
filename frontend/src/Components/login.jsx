import './login.css';
import '../index.css';
import logo from '../Assets/download.png';
import { Link } from 'react-router-dom';

function Login(){
    return <div className='section-area account-wraper2'>
         <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-xl-5 col-lg-6 col-md-8'>
                    <div className='appointment-form form-wraper'>
                        <div className='logo'>
                            <img src={logo}/>
                        </div>
                        <form action='#'>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className='form-group'>
                            <Link type='botton' className='btn mb-30 btn-lg btn-primary w-100' to={'/'}>Login</Link>
                            <Link to={'/'}>Forget Password</Link>
                        </div>
                        <div className='text-center mt-40'>
                            <p className='mt-0'>Dont have any account?</p>
                            <Link to={'/'} className='btn btn-lg btn-secondary w-100'>Register</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
}

export default Login;