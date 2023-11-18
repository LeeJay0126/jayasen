import Footer from "../../SharedComponents/Footer/Footer";
import Menu from "../../SharedComponents/Menu/Menu";
import "./ContactUs.css";
import ContactUsIntro from "./ContactUsIntro";
import ContactUsMain from "./ContactUsMain";

const ContactUs = () => {

    return (
        <main>
            <Menu />
            <main className="ContactUsContainer">
                <ContactUsIntro />
                <ContactUsMain />
            </main>
            <Footer />
        </main>
    );
}

export default ContactUs;