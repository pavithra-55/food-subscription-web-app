import './css/Testimonial.css';
import { Carousel } from 'react-bootstrap';

export default function Testimonial() {
    const CustomerSays = [
        { id: 1, rating: "⭐⭐⭐⭐⭐", description: "Best home-style food I’ve had in months. Worth every rupee!", cusName: "XXX", cusPlace: "Saravanampatti" },
    { id: 2, rating: "⭐⭐⭐⭐", description: "Delicious food and quick delivery. Highly recommend!", cusName: "YYY", cusPlace: "Ganapathy" },
    { id: 3, rating: "⭐⭐⭐⭐", description: "Tasty, healthy, and feels like home-cooked food!", cusName: "ZZZ", cusPlace: "Saravanampatti" },
    { id: 4, rating: "⭐⭐⭐⭐⭐", description: "Perfect meal box for working women like me!", cusName: "SSS", cusPlace: "Thudiyalur" },
    { id: 5, rating: "⭐⭐⭐⭐⭐", description: "Affordable, hygienic, and flavorful — love it!", cusName: "PPP", cusPlace: "Saravanampatti" },
    ]
    return (
        <section className="testimonials">
            <h2 className='text-center mb-4'>What Our Customers Say</h2>
            <Carousel indicators={false} interval={3000} pause="hover">
                {CustomerSays.map((customer) => (
                    <Carousel.Item key={customer.id}>
                        <div className="testimonial">
                            {customer.rating}
                            <p>“{customer.description}”</p>
                            <p><strong>— {customer.cusName}, {customer.cusPlace}</strong></p>
                        </div>
                    </Carousel.Item>
                ))}
                
            </Carousel>
            
        </section>
    );
}