import './css/Faq.css';

export default function Faq() {
    return (
        <section className="faq">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Yes! You can pause or cancel your subscription at any time with no extra charges.</p>
            </div>
            <div className="faq-item">
            <h4>Do you deliver on weekends?</h4>
            <p>Yes, we deliver meals from Monday to Saturday. Sunday deliveries are optional.</p>
            </div>
            <div className="faq-item">
            <h4>Do you offer vegetarian options?</h4>
            <p>Absolutely! We have separate veg and non-veg meal plans to suit your taste.</p>
            </div>
        </section>
    );
}