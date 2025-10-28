import { Carousel, Image, Row, Col, Container } from "react-bootstrap";
import './css/Banner.css';
import Banner1 from '../assets/img/banner-8.jpg';
import Banner2 from '../assets/img/banner-6.jpg';
import Banner3 from '../assets/img/banner-7.jpg';

const Banner = () => {
  const BannerImage = [
    { id: 1, image: Banner1, title: "Eat Healthy", desc: "Delicious tiffins delivered daily" },
    { id: 2, image: Banner2, title: "Fast Delivery", desc: "Hot meals right on time" },
    { id: 3, image: Banner3, title: "Stay Healthy", desc: "Eat fresh, stay energized" }
  ];

  return (
    <section id="banner" className="mt-5 text-white">
      <Carousel fade interval={2000} pause="hover" controls={false}>
        {BannerImage.map((item) => (
          <Carousel.Item key={item.id}>
            <Container fluid className="p-0 h-100">
              <Row className="h-100 align-items-center justify-content-center">
                <Col md={9} sm={12} className="h-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="d-block w-100 h-100 banner-img"
                  />
                </Col>
                <Col md={3} sm={12} className="text-col">
                  <div className="banner-text text-white">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button className="btn btn-success mt-2">Order Now</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
