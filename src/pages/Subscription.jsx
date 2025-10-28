import Banner from "../components/Banner";
import BestFood from "../components/BestFood";
import Testimonial from "../components/Testimonial";
import WhyChoose from "../components/WhyChoose";


export default function Subscription() {
    return (
        <section id="subscriptionSection">
            <Banner />
            <WhyChoose />
            <Testimonial />
            <BestFood />

        </section>
    );
}