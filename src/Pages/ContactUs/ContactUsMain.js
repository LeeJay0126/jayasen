import { IoLogoLinkedin } from "react-icons/io5";
import Email from "./Email";

const ContactUsMain = () => {
    return (
        <section className="ContactUsMain">
            <section className="ContactUsHero">
                <div>
                    <p className="ContactEyebrow">Open to QA / SDET opportunities</p>
                    <h2 className="ContactUsHeading">
                        Let's talk about automation, testing, and software quality.
                    </h2>
                    <p className="ContactIntroText">
                        Reach out for QA automation roles, SDET opportunities, collaboration, or questions about my project work.
                    </p>
                </div>
                <aside className="ContactCard">
                    <a className="LinkedInContainer" href="https://www.linkedin.com/in/jay-lee-b3b46a221/" target="_blank" rel="noreferrer">
                        <IoLogoLinkedin className="ContactUsLinkedIn" />
                        <span>Jay's LinkedIn</span>
                    </a>
                    <a className="ContactEmailLink" href="mailto:jay.asen.lee@gmail.com">
                        jay.asen.lee@gmail.com
                    </a>
                </aside>
            </section>
            <section className="EmailSection">
                <Email/>
            </section>
        </section>
    );
}

export default ContactUsMain;
