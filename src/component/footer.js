
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './assets/images/audi.jpg';
import Image2 from './assets/images/toy.jpg';
import Image3 from './assets/images/lex.jpg';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ backgroundColor: '#222222', minHeight: '50vh', color: 'white', paddingTop: '50px' }}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} style={{ padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '15px' }}>About VintageWheels</h6>
      <p style={{  fontSize: '15px', lineHeight: '1.0' }}>

      "Welcome to Vintage Wheels, where timeless elegance meets automotive passion! Dive into a world where the finest models of classic cars take center stage, showcasing the beauty and craftsmanship of a bygone era. From sleek roadsters to majestic cruisers, our collection embodies the epitome of automotive excellence.

<br></br>Stay updated with the latest news, events, and exclusive insights into the world of vintage automobiles. Whether you're a seasoned enthusiast or just beginning your journey into the realm of classic cars, Vintage Wheels is your ultimate destination for all things vintage and automotive. Join us as we celebrate the heritage, style, and enduring allure of these timeless treasures."      </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={{ padding: '0 20px' , paddingLeft:'10%'}}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px' }}>Navigations</h6>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '15px'}}><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%' }} to={"/"}><p style={{color:'white'}}>Home</p></Link></li>
        <li style={{ marginBottom: '15px'}}><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Category"}><p style={{color:'white'}}>Categories</p></Link></li>
        <li style={{ marginBottom: '15px' }}><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%' }} to={"/about"}><p style={{color:'white'}}>Know US</p></Link></li>
        <li style={{ marginBottom: '15px' }}><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Contact"}><p style={{color:'white'}}>Reach Us</p></Link></li>
      </ul>
          </Col>
          <Col xs={12} md={6} lg={3} style={{ padding: '0 20px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px', paddingLeft:'10%' }}>Categories</h6>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        
        <li style={{ marginBottom: '15px' }}><Link style={{ color: 'black', textDecoration: 'none',fontSize:'100%'}} to={"/Category"}><p style={{color:'white'}}>Sports Cars</p></Link></li>
        <li style={{ marginBottom: '15px' }}>domestic Cars</li>
        <li style={{ marginBottom: '15px' }}>Trucks</li>
        <li style={{ marginBottom: '15px' }}>Hybrids</li>
      </ul>
          </Col>
          <Col xs={12} md={6} lg={3} style={{ padding: '10px' }}>
          <h6 style={{ fontFamily: 'EB Garamond, serif', fontSize: '20px', marginBottom: '10px', paddingRight: '50px' }}>Recent Posts</h6>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image} alt='' style={{ maxWidth: '130px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px',paddingLeft:'40%' }}>AUDI . Jul 5th '24</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' ,paddingLeft:'40%'}}><a href="https://www.autoexpress.co.uk/audi/q8/361435/new-audi-q8-2024-facelift-review-stylish-and-spacious-ever" target="_blank" rel="noopener noreferrer"><p style={{color:'white'}}>Audi Q8 Facelift Launch</p></a>
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image2} alt='' style={{ maxWidth: '130px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px',paddingLeft:'40%' }}>TOYOTA. Jul 5th '24</p>
            <p style={{ fontSize: '15px', marginBottom: '20px' ,paddingLeft:'40%'}}><a href="https://www.toyota.com/crownsignia/"><p style={{color:'white'}}>2025 Toyota Crown Signia Introduction</p></a></p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={4}>
            <img src={Image3} alt='' style={{ maxWidth: '130px', height: 'auto' }} />
          </Col>
          <Col xs={12} md={8}>
            <p style={{ fontSize: '10px', marginBottom: '5px', paddingLeft:'40%'}}>LESUX . Jul 5th '24</p>
            <p style={{ fontSize: '15px', marginBottom: '20px',paddingLeft:'40%' }}><a href="https://pressroom.lexus.com/sophisticated-utility-vehicle-all-new-2024-lexus-gx-redefines-suv/"><p style={{color:'white'}}>Lexus GX 2024 Model Unveiled</p></a></p>
          </Col>
        </Row>
      </Container>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: 'black', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{  color: 'white',paddingLeft: '20px' }}><i className="bi bi-c-circle" style={{ fontSize: '20px' }}></i></p>
    <p style={{ fontFamily: 'EB Garamond, serif', color: 'white', fontSize: '15px', marginLeft: '10px' }}>Copyright VintageWheels. All Rights Reserved</p>
    
    <p style={{  color: 'white',paddingLeft: '700px' }}><i className="bi bi-twitter-x" style={{ fontSize: '20px' }}></i></p>
    <p style={{  color: 'white',paddingLeft: '20px' }}><i className="bi bi-instagram" style={{ fontSize: '20px' }}></i></p>
    <p style={{  color: 'white',paddingLeft: '20px' }}><i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i></p>
        </div>
      </div>
    </div>
  );
};

export default App;
