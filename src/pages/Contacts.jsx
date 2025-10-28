import Contact from "../components/Contact";
import Banner from "../components/Banner";
import WhyChoose from "../components/WhyChoose";
import Faq from "../components/Faq";

export default function Contacts() {
    

    return (
        <section className="contactSection" >
            <Banner />
            <WhyChoose />
            <Contact />
            <Faq />
           
        </section>
    );
}