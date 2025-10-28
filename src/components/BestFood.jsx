import { Container, Row, Col, Image } from "react-bootstrap";
import './css/BestFood.css';
import img1  from '../assets/img/food/1.jpg';
import img2  from '../assets/img/food/2.jpg';
import img3  from '../assets/img/food/3.jpg';
import img4  from '../assets/img/food/4.jpg';
import img5  from '../assets/img/food/5.jpg';
import img6  from '../assets/img/food/6.jpg';
import img7  from '../assets/img/food/7.jpg';
import img8  from '../assets/img/food/8.jpg';
import img9  from '../assets/img/food/9.jpg';
import img10 from '../assets/img/food/17.jpg';


export default function BestFood() {
    const foodImages = [
            {
                id: 1,
                image:img1,
            },
            {
                id: 2,
                image:img2,
            },
            {
                id: 3,
                image:img3,
            },
            {
                id: 4,
                image:img4,
            },
            {
                id: 5,
                image:img5,
            },
            {
                id: 6,
                image:img6,
            },
            {
                id: 7,
                image:img7,
            },
            {
                id: 8,
                image:img8,
            },
            {
                id: 9,
                image:img9,
            },
            {
                id: 10,
                image:img10,
            },
           
            
    ]
    return (
        <section className="best-food py-5">
            <h2 className="mb-4">Our Best Foods</h2>
            <Container>
                
                <Row className="food-img">
                    {foodImages.map((images) => (
                        <Col key={images.id} md="6" lg="2" className="mb-4">
                            <Image src={images.image} width='250px' height='250px' rounded/>
                        </Col>  
                       
                    ))}
                </Row>
            </Container>
        </section>
    );
}