import './Category.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Supra from '../component/assets/images/supra.jpg';
import Chev from '../component/assets/images/chev.jpg';
import Aston from '../component/assets/images/aston.jpg';
import Mustang from '../component/assets/images/mus.jpg';
import Log from '../component/assets/images/lo2.jpg';
import Gw from '../component/assets/images/gr.jpg';
import Bm from '../component/assets/images/Bm.jpg';
import Lean from '../component/assets/images/lean.jpg';
import M from '../component/assets/images/m2.jpg';
import Por from '../component/assets/images/por.jpg';
import Fr from '../component/assets/images/f4.jpg'
import Sc from '../component/assets/images/sc.jpg'
import Bh from '../component/assets/images/un.jpeg'
function Example() {
  const values = [
    { id: 1, image: Supra, description:'Model on Display : TOYOTA SUPRA MK5 , The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation has been produced since March 2019 and went on sale in May 2019.[4] The styling of the original Supra was derived from the Toyota Celica, but it was longer.[5] Starting in mid-1986, the A70 Supra became a separate model from the Celica. In turn, Toyota also stopped using the prefix Celica and named the car Supra.[6] Owing to the similarity and past of the Celicas name, it is frequently mistaken for the Supra, and vice versa. The first, second and third generations of the Supra were assembled at the Tahara plant in Tahara, Aichi, while the fourth generation was assembled at the Motomachi plant in Toyota City. The 5th generation of the Supra is assembled alongside the G29 BMW Z4 in Graz, Austria by Magna Steyr.The Supra traces much of its roots back to the 2000GT owing to an inline-6 layout. January 2019, the fifth-generation Supra, which was co-developed with the G29 BMW Z4, was introduced.[7]' },
    { id: 2, image: Chev, description: 'Model on Display : CHEVY CORVETTE ZR1 , The Chevrolet Corvette is a line of American two-door, two-seater sports cars manufactured and marketed by General Motors under the Chevrolet marque since 1953.[1][2]Throughout eight generations, indicated sequentially as C1 to C8, the Corvette is noted for its performance, distinctive styling, lightweight fiberglass or composite bodywork, and competitive pricing. The Corvette has had domestic mass-produced two-seater competitors fielded by American Motors, Ford, and Chrysler; it is the only one continuously produced by a United States auto manufacturer.[3] It serves as Chevrolets halo car.[4]Since its introduction in 1953, the two-seater has steadily moved upmarket. Initially manufactured in Flint, Michigan, and St. Louis, Missouri, the Corvette has been produced in Bowling Green, Kentucky, since 1981, which is also the location of the National Corvette Museum.The Corvette has become widely known as "Americas Sports Car.' },
    { id: 3, image: Aston, description: 'Model on Display : ASTON MARTIN DB12 , Aston Martin Lagonda Global Holdings PLC (/ˈæstən/) is a British manufacturer of luxury sports cars and grand tourers. Its predecessor was founded in 1913 by Lionel Martin and Robert Bamford. Steered from 1947 by David Brown, it became associated with expensive grand touring cars in the 1950s and 1960s, and with the fictional character James Bond following his use of a DB5 model in the 1964 film Goldfinger.[2] Their grand tourers and sports cars are regarded as a British cultural icon.The 90-acre (36 ha) factory in St Athan, Wales features three converted super-hangars from MOD St Athan, and serves as the production site of Aston Martins first-ever SUV, the DBX.[13][14]Aston Martin has been involved in motorsport at various points in its history, mainly in sports car racing,[15] and also in Formula One.[16] The Aston Martin brand is increasingly being used, mostly through licensing, on other products including a submarine,[17] real estate development,[18] and aircraft.[19]' },
    { id: 4, image: Mustang, description: 'Model on Display : MUSTANG GT DARK HORSE , The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its seventh generation, it is the fifth-best selling Ford car nameplate. The namesake of the "pony car" automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by "long hood, short deck" proportions.[3]Originally predicted to sell 100,000 vehicles yearly, the 1965 Mustang became the most successful vehicle launch since the 1927 Model A.[4][6] [7]From 1965 to 1973, the Mustang was derived from the 1960 Ford Falcon compact. From 1974 until 1978, the Mustang (denoted Mustang II) was a longer-wheelbase version of the Ford Pinto. From 1979 until 2004, the Mustang shared its Fox platform chassis with 14 other Ford vehicles (becoming the final one to use the Fox architecture). Since 2005, Ford has produced two generations of the Mustang, each using a distinct platform unique to the model line' }
  ];

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function handleShow(description) {
    setModalContent(description);
    setShow(true);
  }

  return (
    <>
   <div style={{ backgroundColor: '#DAD3BE', backgroundImage: `url(${Fr})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', position: 'relative' }}>
        <h6 style={{ textAlign: 'right', color: 'white', position: 'absolute', top: '45%', left: '60%', fontSize: '300%' }}><i><b>SPORTS CARS</b> </i></h6>
        <h6 style={{ textAlign: 'right', color: 'white', position: 'absolute', top: '60%', left: '60%', fontSize: '100%' }}><i><b>
        Thrilling performance and sleek design.</b> </i></h6>

      </div>

      <div style={{ padding: '10%' }}>
        <h6 style={{ textAlign: 'center', fontSize: '200%' }}><b><i>"Astonishingly fast and beautiful to look at, a sports car is a supermodel in four wheels." - Jeremy Clarkson</i></b></h6>
      </div>

      <div style={{ backgroundColor: '#222222' }}>
  <h6 style={{ textAlign: 'center', fontSize: '200%' ,color:'white' , paddingTop:'5%', paddingBottom:'5%'}}><b><i>"EXPLORE CAR MODELS"</i></b></h6>
  
  <div className="d-flex justify-content-between mb-2" style={{ backgroundColor: '#222222' }}>
    {values.map((item, idx) => (
      <Button key={idx} variant="outline-dark" className="d-flex align-items-center me-2 mb-2 position-relative" style={{ width: '100%' }} onClick={() => handleShow(item.description)}>
        <p className="me-2" style={{ fontSize: '130%', paddingLeft: '5%', fontFamily: 'serif' }}><b><u><i>Review</i></u></b></p>
        <img src={item.image} alt={`Button ${idx + 1}`} style={{ width: '180%', maxWidth: '180px', height: 'auto', border: '2px solid #ccc', borderRadius: '5px' }} />
      </Button>
    ))}
  </div>
</div>


      <Modal show={show} small={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>VIEW</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundImage: `url(${Bh})`}}>{modalContent}</Modal.Body>
      </Modal>

      <div style={{   backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '200px', position: 'relative' }}>
        <h6 style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '200%' }}><i><b>EXPLORE LATESTS ON VintageWheels</b> </i></h6>
      </div>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>2025 Mercedes-Benz G-Class</b></Accordion.Header>
          <Accordion.Body>
            <p style={{ paddingBottom: '1%' }}>Give Mercedes-Benz credit for orchestrating the G-class SUVs transition from a one-time military transporter to a revered luxury icon. The 2025 G550 shares a silhouette and all-terrain competence with the spartan 1979 original, but its six-figure price tag, highly customizable nature, and a plethora of luxury gear push it close to the ultra-lux realm occupied by vehicles such as the Bentley Bentayga and the Mercedes-Maybach GLS600. The Gs impressive off-road capability comes with a compromise to its on-road handling, however. The G550 isnt exactly crude when being used to commute or road-trip, but you can never quite forget its truckish nature. A turbocharged 3.0-liter inline-six makes 443 horsepower and is mated to a nine-speed automatic and standard all-wheel drive. More serious off-roaders can add all sorts of journey-enhancing equipment; the G Professional model, for example, features meaty tires, an adaptive suspension system, and fancy-but-rugged trim and upholstery. Even so, many buyers will choose a G-class for its unique style and the status-heightening effect that such ownership brings. For an even more audacious G, check out the performance-focused Mercedes-AMG G63, which we review separately.</p>
            <img src={Gw} alt='GW' style={{ width: '60%', display: 'block', margin: '0 auto', border: '2px solid #000', borderRadius: '5px' }} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>The Bugatti W16 Mistral</b></Accordion.Header>
          <Accordion.Body>
            <p style={{ paddingBottom: '1%' }}>The Bugatti Mistral, also called the Bugatti W16 Mistral, is a mid-engine two-seater sports car manufactured in Molsheim, France, by French automobile manufacturer Bugatti Automobiles S.A.S. It was revealed on 19 August 2022.[5] The Mistral is marketed as the fastest roadster in the world.[6] Deliveries to customers will begin in early 2024.[7] All 99 units were pre-sold at a price of €5 million.[8]

The Mistral is not a cabriolet version of the Bugatti Chiron but rather a separate roadster model for Bugatti that marks the last vehicle to use the W16 engine that was introduced with the Bugatti Veyron in 2005.[9]

Specifications
The exterior design is unique to the Mistral and is not based on the Chiron or the latest Bugatti models. It is very aerodynamic and sporty but also luxurious, the front headlights are uniquely designed with four diagonal lighting strips, the rear lights are designed as two arrows pointing to the Bugatti symbol which is also part of the lighting. Compared to the exterior, the passenger cabin was based on the Chiron, except for the gear lever design where the "dancing egg" sculpture was embedded in amber, designed by sculptor Rembrandt Bugatti, brother of Ettore Bugatti, the founder of Bugatti.[10]</p>
            <img src={Bm} alt='BM' style={{ width: '60%', display: 'block', margin: '0 auto', border: '2px solid #000', borderRadius: '5px' }} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>The TOP BRANDS FOR SPORTS CARS</b></Accordion.Header>
          <Accordion.Body>
            <p style={{ paddingBottom: '1%', fontSize: '150%' }}>1. Toyota GR86. Over a decade ago in 2012, Toyota ended its sports car hiatus with the launch of the GT86.</p>
            <img src={Lean} alt='' style={{ width: '40%', display: 'block', margin: '0 auto', border: '2px solid #000', borderRadius: '5px' }} />
            <p style={{ paddingBottom: '1%', fontSize: '150%' }}>2. BMW M2. The BMW M2 is an absolute triumph.</p>
            <img src={M} alt='' style={{ width: '40%', display: 'block', margin: '0 auto', border: '2px solid #000', borderRadius: '5px' }} />
            <p style={{ paddingBottom: '1%', fontSize: '150%' }}>3. Porsche 718 Cayman.</p>
            <img src={Por} alt='' style={{ width: '40%', display: 'block', margin: '0 auto', border: '2px solid #000', borderRadius: '5px' }} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Example;
