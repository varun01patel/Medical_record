import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Work(){
    return <div>
      <section className="section-sp5">
        <div className="container-sm">
          <div className="heading-bx text-center">
          <h6>Working Process</h6>
          <h2 className="title">How we work ?</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                    <div className="work-num-bx">01</div>
                    <div className="work-content">
                        <h5 className="mb-10">Create Your Account</h5>
                        <p>Sign up in moments and start managing your medical records securel</p>
                    </div>
                    <Link to={''} className="btn btn-primary light">
                        View More
                        <IoIosArrowForward/>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx active">
                    <div className="work-num-bx">02</div>
                    <div className="work-content">
                        <h5 className="mb-10">Upload Your Records</h5>
                        <p>Easily upload your medical documents to a blockchain-secured repository.</p>
                    </div>
                    <Link to={''} className="btn btn-primary light">
                        View More
                        <IoIosArrowForward/>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
                <div className="work-bx">
                    <div className="work-num-bx">03</div>
                    <div className="work-content">
                        <h5 className="mb-10">Control Data Sharing</h5>
                        <p>Manage who can view your records with customizable access controls.</p>
                    </div>
                    <Link to={''} className="btn btn-primary light">
                        View More
                        <IoIosArrowForward/>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
}

export default Work ;