import Contact from "../components/Contact";
import Banner from "../components/Banner";
import WhyChoose from "../components/WhyChoose";
import AboutContent from "../components/AboutContent";
import BestFood from "../components/BestFood";

export default function About() {
    

    return (
        <section className="contactSection" >
            <Banner />
            <AboutContent />
            <WhyChoose />
            <BestFood />
            <Contact />
        </section>
    );
}