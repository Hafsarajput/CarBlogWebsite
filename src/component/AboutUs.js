
import AboutUss from '../component/assets/images/lgo.png';
import MissionvisionImg from '../component/assets/images/lo3.jpg';
import ellen from '../component/assets/images/ellem.jpg';
import kristen from '../component/assets/images/kris.jpg';
import stewart from  '../component/assets/images/ste.jpg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import '../component/AboutUs.css';


function AboutUs() {
    return (
        <>
            <Container className='container'>
                <div className='heading'>
                    <h1>Know Us</h1>
                </div>
                <div className='company-history'>
                    <div className='aboutUs-img'>
                        <img src={AboutUss} alt='About us' />
                    </div>
                    <div className='aboutUs-text'>
                    <h6>
                           KNOW US
                        </h6>
                        <h3>Company History</h3>
<p>
VintageWheels: A Journey Through Automotive Excellence

Founded in 2010, VintageWheels began as a passion project for a group of car enthusiasts dedicated to celebrating the art and innovation of the automotive world. What started as a modest blog sharing vintage car stories and showcasing classic models soon evolved into a premier platform for the latest news and trends in the car industry.

Over the years, VintageWheels has grown exponentially, becoming a trusted source for car aficionados and industry professionals alike. Our commitment to quality content, in-depth reviews, and exclusive insights into the newest models has set us apart. We take pride in bridging the gap between the timeless charm of vintage automobiles and the cutting-edge advancements of today’s automotive technology.
 </p> </div>


                </div>

                <div className='mission-and-vision'>

                    <div className='mission-text'>
                        <h6>
                            MISSION & VISION
                        </h6>
                        <h3>Mission and Vision</h3>
<p>
At VintageWheels, our mission is to fuel the passion for automobiles by providing top-quality content that bridges vintage charm with modern innovation. We inform, inspire, and engage car enthusiasts with in-depth reviews, exclusive news, and captivating stories.

Our vision is to be the leading destination for automotive enthusiasts worldwide, known for our authoritative coverage of classic and contemporary cars. We aim to cultivate a global community that appreciates the past, present, and future of automotive excellence.


</p>
                    </div>


                    <div className='mission-img'>
                        <img src={MissionvisionImg} alt='Mission and vission img' />
                    </div>

                 </div >


                 <div className='our-team'>
                    <div className='team-dis'>
                        <h3>Our Team</h3>
                            <p style={{fontSize:'120%'}}>
                          At VintageWheels, our team is the driving force behind our success. Comprising passionate car enthusiasts, seasoned journalists, and industry experts, our diverse group brings a wealth of knowledge and experience to the table. United by a shared love for all things automotive, we are dedicated to delivering top-notch content that resonates with our reade</p>                    </div>

                       <Row className='row'>
                        <Col xs={6} md={4} className='column'>
                         <Image src={ellen} roundedCircle style={{width:'100%'}} />
                            <h3>ELLEN</h3>
                            <h6>FOUNDER & CEO</h6>
                            <p>As the visionary founder of VintageWheels, Ellen laid the foundation for our digital haven. Her passion for mindful living and dedication to spreading joy set the tone for our community. With a keen eye for inspiration, Ellen journey in creating VintageWheels reflects her commitment to cultivating a space where happiness flourishes.</p>
                        </Col>
                        <Col xs={6} md={4} className='column'>
                            <Image src={kristen} roundedCircle style={{width:'100%'}} />
                            <h3>KRISTEN </h3>
                            <h6>FOUNDER, VP</h6>
                            <p>kristen, our Co-Founder and VP, brings strategic leadership to VintageWheels. With a blend of creativity and organizational acumen, kristen shapes the trajectory of our community. Their commitment to fostering a positive, collaborative environment is integral to VintageWheels's evolution as a vibrant hub for mindful living enthusiasts.</p>
                        </Col>
                        <Col xs={6} md={4} className='column'>
                            <Image src={stewart} roundedCircle style={{width:'120%'}} />
                            <h3>STEWART</h3>
                            <h6>EDITOR STAFF</h6>
                            <p>Meet Stewart, the creative force behind VintageWheels's content. With a keen editorial eye and a passion for storytelling, Stewart leads our talented team of writers and editors. Their commitment to maintaining the highest standards of quality ensures that every article on VintageWheels reflects our mission of inspiring mindful living and joy.</p>
                        </Col>
                       </Row>
                       </div>
                      

                       

            </Container >
        </>
    );
}

export default AboutUs;