import AboutUs from "../Sections/aboutus";
import Account from "../Sections/account";
import Banner from "../Sections/banner";
import Footer from "../Sections/footer";
import NavBars from "../Sections/navbar";

import Services from "../Sections/services";
import Testimonial from "../Sections/testimonial"
import Work from "../Sections/work";


function Home(){
    return <div>
      <NavBars/>
      <Banner/>
      <AboutUs/>
      <Work/>
      <Account/>
      <Services/>
      <Testimonial/>
      
      <Footer/>
      
    </div>
}

export default Home;