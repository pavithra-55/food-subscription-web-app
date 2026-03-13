import Banner from "../components/Banner";
import BestFood from "../components/BestFood";
import Plan from "../components/Plan";
import Testimonial from "../components/Testimonial";
import WhyChoose from "../components/WhyChoose";



export default function Subscription() {
    return (
        <section id="subscriptionSection" className="container-fluid">
            
            <Plan />
            <Testimonial />
            <WhyChoose />
            <BestFood />

        </section>
    );
}