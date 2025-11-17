import { Container, Row, Col, Image } from "react-bootstrap";
import './css/BestFood.css';
import { useEffect, useState } from 'react';


export default function BestFood() {
    const [foodImages, setFoodImages] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/pavithra-55/indian-food-api/refs/heads/main/data.json")
            .then(res => res.json())
            .then(data => setFoodImages(data));
    }, []);
    return (
        <section className="best-food py-5">
            <h2 className="mb-4">Our Best Foods</h2>
            <Container>
                <Row className="food-img">
                    {foodImages.map((images) => (
                        <Col key={images.id} md="6" lg="2" className="mb-4 text-center">
                            <Image src={images.image} style={{ width: "180px", height: '180px', objectFit: 'cover', borderRadius: '10px' }} rounded />
                            <p>{images.name}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}