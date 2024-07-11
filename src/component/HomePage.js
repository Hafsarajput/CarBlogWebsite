import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import img1 from '../component/assets/images/y.jpg';
import img2 from '../component/assets/images/lam.jpg';
import img3 from '../component/assets/images/f.jpg';
import img4 from '../component/assets/images/se.png';
import img5 from '../component/assets/images/img1.jpg';
import img6 from '../component/assets/images/cameron.png';
import civImg from '../component/assets/images/civ.jpg';
import Maintenance from '../component/assets/images/main.jpg';
import tyre from '../component/assets/images/tyre.jpg';
import decar from '../component/assets/images/cars.jpg';
import tesla from '../component/assets/images/tesla.jpg';
import sheet from '../component/assets/images/sheet.jpg';
import cars from '../component/assets/images/file.png'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import '../component/HomePage.css';
function HomePage() {
    return (
        <div>
            <Container className='container-1'>
                <Carousel slide={false} >
                    <Carousel.Item>
                        <img src={img1} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Muscle Power: The Iconic Dodge Challenger</h3>
                            <p>Rev up your senses with the raw, unfiltered power of the Dodge Challenger. This image captures the essence of American muscle, blending bold design with relentless performance. The Challenger's fierce stance and iconic styling pay homage to its legendary heritage while embodying modern innovation. Join me in celebrating the thrill of the open road and the timeless appeal of this automotive powerhouse.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Exquisite Speed: The Lamborghini Experience</h3>
                            <p>Immerse yourself in the epitome of luxury and performance with the Lamborghini. This photo captures the sleek lines and dynamic presence of a true supercar, merging cutting-edge technology with exquisite design. The Lamborghini's aggressive stance and aerodynamic elegance symbolize both power and sophistication. Join me in marveling at the artistry and engineering prowess that define this iconic masterpiece of automotive excellence.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt='Photos' className='images' />
                        <Carousel.Caption>
                            <h3>Pure Passion: The Essence of Ferrari</h3>
                            <p>Indulge in the unparalleled allure of Ferrari, where speed meets elegance in perfect harmony. This image encapsulates the breathtaking design and relentless performance that define the Ferrari legacy. With its sculpted curves and powerful engine, the Ferrari is a testament to innovation and craftsmanship. Join me in appreciating the timeless beauty and exhilarating spirit of this legendary supercar.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <img src={img4} alt='Photos' className="img-fluid w-100" />
            </Container>

            <Container>
                <Row className='Row'>
                    <Col className='Col-1'  >
                    <a href="https://www.usautomotiveprotectionservices.com/post/the-fascinating-world-of-auto-industry-unveiling-the-secrets-of-how-concept-cars-shape-the-future" target="_blank" rel="noopener noreferrer"><img src={img5} alt='Photo 5' /></a>
                    
                        <h6>CARS . Jan 5th '24</h6>
                        <h3>The Fascinating World
                            of Modern Automobiles</h3>
<p>In today's fast-paced world, cars have evolved into marvels of technology and design, offering unprecedented levels of comfort, safety, and efficiency. Modern automobiles are more than just modes of transportation; they embody the innovation and craftsmanship of the automotive industry. Whether you're a car enthusiast, a daily commuter, or someone looking to invest in a new vehicle, understanding the latest trends and features in the automotive world can help you make informed decisions. From electric vehicles to autonomous driving, here are some key insights into the captivating world of cars.</p>

                        <div className='editor'>
                            <img src={img6} alt='6th  img' />
                            <h6>Cameron Williamson</h6>
                        </div>
                    </Col>
                    <Col className='col-2' >
                        <div className='card-1'>
                        <a href="https://www.honda.ca/en/civic_sedan" target="_blank" rel="noopener noreferrer"><img src={civImg} alt=' ' /></a>
                        
                            <h6>CARS . Jan 17th '24</h6>
                            <h3>Honda Launched CIVIC 2024?</h3>

                        </div>

                        <div className='card-1'>
                        <a href="https://www.lebeuro-parts.com/post/keep-your-car-at-peak-performance" target="_blank" rel="noopener noreferrer"><img src={Maintenance} alt=' ' /></a>
                        
                           
                            <h6>MAINTAIN . June 5th '24</h6>
                            <h3>Vehicle Maintenance: Preserving Peak Performance</h3>

                        </div>

                        <div className='card-1'>
                            <img src={tyre} alt=' ' />
                            <h6>TYRE . June 15th '24</h6>
                            <h3>Tire Care: Safeguarding Your Journey</h3>

                        </div>
                    </Col>



                    <Col className='col-2'>
                        <div className='card-1'>
                        <img src={sheet} alt='' />
                           
                            <h6>SHEETS . Jun 5th '24</h6>
                            <h3>6 Easy Steps To Cover Your
                                Car with Elegant car body sheets</h3>

                        </div>

                        <div className='card-1'>
                        <a href="https://www.tesla.com/model3" target="_blank" rel="noopener noreferrer"> <img src={tesla} alt=' ' /></a>
                       
                            <h6>TESLA . Mar 1st '24</h6>
                            <h3>Exploring Tesla's Latest Model Release and Innovations</h3>

                        </div>

                        <div className='card-1'>
                        <a href="https://www.spinny.com/blog/index.php/the-best-cars-for-women/" target="_blank" rel="noopener noreferrer">  <img src={decar} alt='' /></a>
                      
                            <h6>CARS . Jul 5th '24</h6>
                            <h3>5 Great Cars for
                                Female </h3>

                        </div>
                    </Col>


                    <Col>
                        <ListGroup className='col-3'>
                            <ListGroup.Item className='header'>
                                <h3>Trending</h3>
                            </ListGroup.Item>
                            <ListGroup.Item className='content'>
                            <a href="https://www.drivepivotal.com/blog/general/rise-of-electric-car-subscription-uk/" target="_blank" rel="noopener noreferrer">
                            <h6>Embracing the Electric Vehicle Renaissance: Navigating the Landscape of Eco-Friendly Mobility</h6></a>

                                <p>Drivepivotal.com</p>
                            </ListGroup.Item>
                            <ListGroup.Item className='content'>
                            <a href="https://www.automotive-technology.com/articles/autonomous-vehicles-paving-the-way-for-a-self-driving-future" target="_blank" rel="noopener noreferrer">
                            <h6>Future of Transportation: Autonomous Driving Ethics and Advancements</h6></a>

                                <p>Automotive-technology.com</p>
                            </ListGroup.Item>

                            <ListGroup.Item className='content'>
                            <a href="https://www.experian.com/blogs/insights/future-evs-greener-pastures/" target="_blank" rel="noopener noreferrer">
                            <h6>Sustainable Solutions: A Deep Dive into the Automotive Industry's Quest for Greener Pastures</h6></a>

                                <p>Experian.com</p>
                            </ListGroup.Item>

                            <ListGroup.Item className='content'>
                            <a href="https://worldtrader24.de/driving-the-future-unveiling-ferraris-top-innovations-in-supercar-performance-and-luxury/" target="_blank" rel="noopener noreferrer">
                            <h6>Next Gen Automotive Marvels: High-Performance Supercars Innovations</h6></a>

                                <p>Worldtrader24.de</p>
                               
                            </ListGroup.Item>
                             <img src={cars} alt='' style={{ width:'100%', height:'auto'}} />

                           
                            
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;