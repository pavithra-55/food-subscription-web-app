
import { useState } from "react";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import './css/Home.css';
import { Container, Row, Col, Image, Card} from "react-bootstrap";
import img1 from '../assets/img/checklist-2.jpg';
import img2 from '../assets/img/delivery.jpg';
import img3 from '../assets/img/enjoy.jpg';
import WhyChoose from "../components/WhyChoose";
import BestFood from "../components/BestFood";
import Testimonial from "../components/Testimonial";



function Home() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const cardContent = [
        {
            id: 1,
            cardFront: 'Pick Your Plan',
            cardBack: 'Customize your menu and timing for a perfectly personal dining experience.',
            image:img1,
        },
        {
            id: 2,
            cardFront: 'Fresh Meals Delivered',
            cardBack: 'Our chefs prepare and deliver fresh, homemade meals straight to your doorstep.',
            image:img2,
        },
        {
            id: 3,
            cardFront: 'Enjoy & Manage',
            cardBack: 'Savor your meals, track deliveries, and easily manage your subscription through the app.',
            image:img3,
        },
        
    ]
  
    
    return (
        <>
            <Banner />
            <section id="how-works" >
                <h1 className="text-center">How It <span className="green-text">Works</span></h1>
                <Container>
                    <Row className="p-5 m-5 d-flex justify-content-evenly">
                        {cardContent.map((content) => (
                            <Col key={content.id} md={4}>
                            <Container>
                                <div
                                className={`flip-card ${hoveredCard === content.id ? "flipped" : ""}`}
                                onMouseEnter={() => setHoveredCard(content.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <div className="flip-card-front-content">{content.cardFront}</div>
                                        </div>

                                        <div className="flip-card-back">
                                            <Card>
                                                <div style={{ position: 'relative' }}><Image src={content.image} width='250px' height='250px' objectfit></Image></div>
                                                <Card.Body>
                                                    <Card.Text><div className="flip-card-back-content">{content.cardBack}</div></Card.Text>
                                                </Card.Body>
                                            </Card>     
                                        </div>
                                    </div>
                                </div>
                            </Container>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <WhyChoose />
            <BestFood />
            <Testimonial />
            <Contact />
        </>
    );

}
export default Home;