import './css/Footer.css';
import { Container } from 'react-bootstrap';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container className='text-center'>
                <h2>Start Your Healthy Meal Journey Today</h2>
                <p>Subscribe now & get 10% OFF your first box!</p>
                <div>All Rights Reserved &copy; {currentYear} Yugan Foods</div>
            </Container>
        </footer>
    ); 
}