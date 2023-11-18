import { IoLogoLinkedin } from "react-icons/io5";
import Email from "./Email";

const ContactUsMain = () => {
    return (
        <section className="ContactUsMain">
            <section className="ContactUsHero">
                <div>
                    <h2 className="ContactUsHeading">
                        <span>Get</span> in Touch <span>With</span> Us
                    </h2>
                    <h2 className="ContactUsHeading">
                        Via <span>LinkedIn</span> or <span>Email</span>
                    </h2>
                </div>
                <aside>
                    <div className="LinkedInContainer">
                        <IoLogoLinkedin className="ContactUsLinkedIn" />
                        <a className="LinkedInFig" href="https://www.linkedin.com/in/jay-lee-b3b46a221/">
                            <figcaption> Jay's LinkedIn</figcaption>
                        </a>
                    </div>
                    <div className="LinkedInContainer">
                        <IoLogoLinkedin className="ContactUsLinkedIn" />
                        <a className="LinkedInFig" href="https://www.linkedin.com/in/asen-lee-a74730163/">
                            <figcaption> Asen's LinkedIn</figcaption>
                        </a>
                    </div>
                </aside>
            </section>
            <section className="EmailSection">
                <Email/>
            </section>
        </section>
    );
}

export default ContactUsMain;